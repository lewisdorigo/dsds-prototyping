'use server';

import { isValidElement } from 'react';
import type { Components, FormComponent } from 'dsds-react/dist/utils/types';
import { Types as DatePickerTypes } from 'dsds-react/dist/components/DatePicker';
import type { Page as FormPage } from 'dsds-react/dist/utils/types/page';
import type { Value as FormValue } from 'dsds-react/dist/utils/types/meta';
import type { Error as FormError } from 'dsds-react/dist/utils/types/validation';

import { redirect } from 'next/navigation';
import { readdir } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { join as makePath, relative } from 'path';

import { parseConditions } from 'dsds-react/dist/lib/conditional';
import getSession from './getSession';

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
 * @returns {Promise<FormPage>} - The route data
 */
export async function getData(route:string[]):Promise<FormPage> {
    const routePath = makePath(...route);
    const session = await getSession();

    const routeData = session[routePath];

    return import(`../routes/${routePath}`)
        .then((data) => (data && data.default ? data.default : {}) as FormPage)
        .then(({ content, ...data }) => ({
            ...data,
            content: (
                routeData
                    ? content.map((component) => {
                        if (
                            !component
                            || typeof component !== 'object'
                            || !Object.prototype.hasOwnProperty.call(component, 'type')
                            || !Object.prototype.hasOwnProperty.call(component, 'name')
                            || isValidElement(component)
                        ) {
                            return component;
                        }

                        const field = component as FormComponent;

                        return {
                            ...field,
                            value: (
                                typeof routeData[field.name] !== 'undefined'
                                    ? String(routeData[field.name])
                                    : undefined
                            ),
                        } as FormComponent;
                    })
                    : content
            ),
        }))
        .then((data) => ({
            ...data,
            route: routePath,
        }));
}

/**
 * Returns an array of all routes.
 *
 * @param {string} route - the path to file in the `routes` directory
 * @returns {Promise<string[]>} - The route data
 */
export async function getAllRoutes(route:string = ''):Promise<string[]> {
    const relPath = makePath(process.cwd(), 'routes', route);

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

/**
 * Handles validation fo rfields
 *
 * @param {Components} components - An array of components
 * @param {Record<string, FormValue>} formValues - Key/Value pairs of form data
 * @param {FormData} formData - The submitted form data
 * @returns {FormError[]} - An array of errors
 */
const handleValidation = function handleValidation(
    components:Components,
    formValues:Record<string, FormValue | FormValue[]>,
    formData:FormData,
) {
    const errors:FormError[] = [];

    components.forEach((component) => {
        if (
            !component
            || typeof component !== 'object'
            || !Object.prototype.hasOwnProperty.call(component, 'type')
            || !Object.prototype.hasOwnProperty.call(component, 'name')
            || isValidElement(component)
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
            conditions,
        } = component as FormComponent;

        let { id: fieldId } = component as FormComponent;

        const formValue = formValues[name];

        if (conditions && !parseConditions(conditions, formValues)) {
            return;
        }
        if (
            type === 'date'
            && (component as DatePickerTypes.DatePicker).multiple
        ) {
            fieldId = `${id}`;
        }

        if (validation && validation.length > 0) {
            validation.forEach((valid) => {
                const isValid = valid(formValue, formData);

                if (!isValid) {
                    errors.push({
                        fieldId,
                        href: fieldId !== id ? `#${fieldId}` : undefined,
                        message: `The value for “${label}” is invalid`,
                        fieldMessage: 'This field is invalid',
                    });
                } else if (typeof isValid === 'string') {
                    const fieldLabel = (
                        typeof label === 'string'
                            ? label
                            : 'the field'
                    );

                    const errorMessage = (
                        isValid
                            .replace(/\{\s*label\s*\}/gi, fieldLabel)
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
                        fieldId,
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
                fieldId,
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
                    fieldId: '',
                    message: 'There was an error with form data. Please try again later.',
                },
            ],
        };
    }

    const session = await getSession();

    // await delay(2000);

    const routePath = formData.get('_form') as string;
    const route = routePath.split('/');
    const { content, nextPage } = await getData(route);
    // const errors:ScotGov.Form.Error[] = [];

    const rawFormData:Record<string, FormValue | FormValue[]> = {};

    content.forEach((component) => {
        let formValue:FormValue | FormValue[] = '';

        if (
            !component
            || typeof component !== 'object'
            || !Object.prototype.hasOwnProperty.call(component, 'type')
            || !Object.prototype.hasOwnProperty.call(component, 'name')
            || isValidElement(component)
        ) {
            return;
        }

        const {
            name,
            type,
        } = component as FormComponent;

        if (
            (
                type === 'date'
                || type === 'date-picker'
            )
            && (component as DatePickerTypes.DatePicker).multiple
        ) {
            if (formData.get(`${name}`)) {
                formValue = formData.get(`${name}`) as string;
            } else if (
                formData.get(`${name}-day`)
                && formData.get(`${name}-month`)
                && formData.get(`${name}-year`)
            ) {
                const dayValue:string = (formData.get(`${name}-day`) as string).padStart(2, '0');
                const monthValue:string = (formData.get(`${name}-month`) as string).padStart(2, '0');
                const yearValue:string = (formData.get(`${name}-year`) as string).padStart(4, '0');

                const { dateFormat } = component as DatePickerTypes.DatePicker;

                switch (dateFormat) {
                    case DatePickerTypes.DateFormat.MonthDayYear:
                        formValue = `${monthValue}/${dayValue}/${yearValue}`;
                        break;

                    case DatePickerTypes.DateFormat.YearMonthDay:
                        formValue = `${yearValue}/${monthValue}/${dayValue}`;
                        break;

                    default:
                        formValue = `${dayValue}/${monthValue}/${yearValue}`;
                        break;
                }
            }
        } else if (type === 'checkboxes') {
            formValue = formData.getAll(name) as string[];
        } else {
            formValue = formData.get(name) as string;
        }

        rawFormData[name] = formValue;
    });

    const errors = handleValidation(
        content,
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

    session[routePath] = rawFormData;
    await session.save();

    let next = '';

    if (!nextPage) {
        return {
            message: 'success',
            values: rawFormData,
        };
    } if (typeof nextPage === 'string') {
        next = nextPage;
    } else {
        next = nextPage.default;

        nextPage.options?.every(({
            fieldName,
            page,
            isNull,
            method,
            value,
        }) => {
            if (
                isNull
                && (
                    (isNull && !rawFormData[fieldName])
                    || (!isNull && rawFormData[fieldName])
                )
            ) {
                next = page;
                return false;
            }

            if (
                method
                && typeof method === 'function'
                && method(formData)
            ) {
                return false;
            }

            if (rawFormData[fieldName] === value) {
                next = page;
                return false;
            }

            return true;
        });
    }

    return redirect(next);
};

export default handleSubmit;
