'use server';

import { redirect } from 'next/navigation';
import { readdir } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { join as makePath, relative } from 'path';

import { parseConditional } from './conditional';

const allowedFileTypes = [
    'json',
    'ts',
    'js',
    'tsx',
    'jsx',
];

/**
 * Gets data for a given route.
 *
 * @param {string[]} route - The route to get data for.
 * @returns {Promise<ScotGov.Pages.FormPage>} - The route data
 */
export async function getData(route:string[]):Promise<ScotGov.Pages.FormPage> {
    const relPath = makePath(...route);

    return import(`../routes/${relPath}`)
        .then((data) => (data && data.default ? data.default : {}))
        .then((data) => ({
            ...data,
            route: relPath,
        }));
}

/**
 * Returns an array of all routes.
 *
 * @returns {Promise<string[]>} - The route data
 */
export async function getAllRoutes():Promise<string[]> {
    const relPath = makePath(process.cwd(), 'routes');

    return readdir(relPath, {
        withFileTypes: true,
        recursive: true,
    }).then((fileList) => (
        fileList
            /**
             * Filter the list to only include files that have a file extension that's in the
             * array of allowed file types.
             */
            .filter((file) => (
                file.isFile()
                && allowedFileTypes.includes(extname(file.name).replace(/^\./, ''))
            ))
            /**
             * For each file we have, remove the file extension, and build the url path.
             *
             * E.g., the file `./routes/about-you/nino.ts` will result in `about-you/nino`.
             */
            .map((file) => {
                const { name, path } = file;
                const ext = extname(name);
                const baseName = basename(name, ext);
                const relFilePath = relative(relPath, path);

                return makePath(relFilePath, baseName);
            })
    ));
}

// const delay = function delay(ms:number) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// };

const handleValidation = function handleValidation(
    components:(string | ScotGov.Field<unknown, unknown, unknown>)[],
    formValues:{[key:string]: ScotGov.Form.Value},
    formData:FormData,
) {
    const errors:ScotGov.Form.Error[] = [];

    components.forEach((component) => {
        if (
            typeof component === 'string'
            || !component.type
            || !component.name
        ) {
            return;
        }

        const {
            id,
            name,
            type,
            required,
            label,
            validation,
            conditional,
        } = component;

        const formValue = formValues[name];

        let {
            id: fieldId,
        } = component;

        if (conditional && !parseConditional(conditional, formValues)) {
            return;
        }
        if (
            type === 'date'
            && (component as ScotGov.Component.Field.Date).multiple
        ) {
            fieldId = `${id}-day`;
        }

        if (validation && validation.length > 0) {
            validation.forEach((valid) => {
                const isValid = valid(formValue, formData);

                if (!isValid) {
                    errors.push({
                        field: id,
                        href: fieldId !== id ? `#${fieldId}` : undefined,
                        message: `The value for “${label}” is invalid`,
                        fieldMessage: 'This field is invalid',
                    });
                } else if (typeof isValid === 'string') {
                    const errorMessage = (
                        isValid
                            .replace(/\{\s*label\s*\}/gi, label || '')
                            .replace(
                                /\{\s*value\s*\}/gi,
                                (
                                    Array.isArray(formValue)
                                        ? formValue.join(', ')
                                        : formValue
                                ),
                            )
                    );
                    errors.push({
                        field: id,
                        href: fieldId !== id ? `#${fieldId}` : undefined,
                        message: errorMessage,
                        fieldMessage: errorMessage,
                    });
                }
            });
        }

        if (
            required && (
                (type === 'checkboxes' && formValue.length < 1)
                || !formValue
            )
        ) {
            errors.push({
                field: id,
                href: fieldId !== id ? `#${fieldId}` : undefined,
                message: `“${label}” is required`,
                fieldMessage: 'This field is required',
            });
        }
    });

    return errors;
};

/**
 * Parses form submissions and validation.
 *
 * @param {object} prevState - the previous state of the form
 * @param {FormData} formData - data in the submitted form
 * @returns {object} - Response data for the submission
 */
const handleSubmit = async function handleSubmit(
    prevState: ScotGov.Form.State,
    formData: FormData,
):Promise<ScotGov.Form.State> {
    if (!formData.has('_form')) {
        return {
            message: 'error',
            errors: [
                {
                    field: '',
                    message: 'There was an error with form data. Please try again later.',
                },
            ],
        };
    }

    // await delay(2000);

    const route = (formData.get('_form') as string).split('/');
    const { components, nextPage } = await getData(route);
    // const errors:ScotGov.Form.Error[] = [];

    const rawFormData:{[key:string]: ScotGov.Form.Value} = {};

    components.forEach((component) => {
        let formValue:ScotGov.Form.Value = '';

        if (
            typeof component === 'string'
            || !component.type
            || !component.name
        ) {
            return;
        }

        const {
            name,
            type,
        } = component;

        if (
            type === 'date'
            && (component as ScotGov.Component.Field.Date).multiple
        ) {
            if (formData.get(`${name}`)) {
                formValue = formData.get(`${name}`) as string;
            } else if (
                formData.get(`${name}-day`)
                && formData.get(`${name}-month`)
                && formData.get(`${name}-year`)
            ) {
                formValue = [
                    formData.get(`${name}-year`),
                    formData.get(`${name}-month`),
                    formData.get(`${name}-day`),
                ].join('-') as string;
            }
        } else if (type === 'checkboxes') {
            formValue = formData.getAll(name) as string[];
        } else {
            formValue = formData.get(name) as string;
        }

        rawFormData[name] = formValue;
    });

    const errors = handleValidation(
        components,
        rawFormData,
        formData,
    );

    if (errors.length > 0) {
        return {
            message: 'error',
            errors,
            values: rawFormData,
        };
    }

    let next = '';

    if (typeof nextPage === 'string') {
        next = nextPage;
    } else {
        next = nextPage.default;

        nextPage.options?.every(({
            field,
            value,
            isNull,
            method,
            page,
        }) => {
            if (
                isNull
                && (
                    (isNull && !rawFormData[field])
                    || (!isNull && rawFormData[field])
                )
            ) {
                next = page;
                return false;
            }

            if (method && method(formData)) {
                return false;
            }

            if (rawFormData[field] === value) {
                next = page;
                return false;
            }

            return true;
        });
    }

    return redirect(next);
};

export default handleSubmit;
