'use server';

import { redirect } from 'next/navigation';
import { readFile, readdir } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { join as makePath, relative } from 'path';

/**
 * Gets data for a given route.
 *
 * @param {string[]} route - The route to get data for.
 * @returns {Promise<ScotGov.Pages.FormPage>} - The route data
 */
export async function getData(route:string[]):Promise<ScotGov.Pages.FormPage> {
    const last = route.pop();
    const relPath = makePath(process.cwd(), 'routes', ...route, `${last}.json`);

    const fileContents = await readFile(relPath, { encoding: 'utf8' });
    return {
        ...JSON.parse(fileContents),
        route: makePath(...route, `${last}`),
    };
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
            .filter((file) => file.isFile())
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
    const errors:ScotGov.Form.Error[] = [];

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
            id,
            name,
            type,
            required,
            label,
        } = component;

        let {
            id: fieldId,
        } = component;

        if (
            type === 'date'
            && (component as ScotGov.Component.Field.Date).multiple
        ) {
            fieldId = `${id}-day`;

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

        if (
            required && (
                (type === 'checkboxes' && formValue.length < 1)
                || !formValue
            )
        ) {
            errors.push({
                field: id,
                href: fieldId !== id ? `#${fieldId}` : undefined,
                message: `"${label}" is required`,
                fieldMessage: 'This field is required.',
            });
        }
    });

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
