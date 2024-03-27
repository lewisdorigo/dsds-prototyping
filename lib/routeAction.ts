'use server';

import { redirect } from 'next/navigation';
import { readFile } from 'node:fs/promises';
import { join as makePath } from 'path';

/**
 * Gets data for a given route.
 *
 * @param {string[]} route - The route to get data for.
 * @returns {Promise} - The route data
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
 * @param {object} prevState - the previous state of the form
 * @param {FormData} formData - data in the submitted form
 * @returns {object} - Response data for the submission
 */
const handleSubmit = async function handleSubmit(
    prevState: ScotGov.Form.State,
    formData: FormData,
) {
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

    const route = (formData.get('_form') as string).split('/');
    const { components, nextPage } = await getData(route);
    const errors:ScotGov.Form.Error[] = [];

    formData.forEach(console.log);

    const rawFormData:{[key:string]: string} = {};
    components.forEach((component) => {
        let formValue = '';
        let id = component.id;

        if (
            typeof component === 'string'
            || !component.type
            || !component.name
        ) {
            return;
        }

        if (
            component.type === 'date'
            && component.additional?.multiple
        ) {
            id = `${component.id}-day`;

            if (formData.get(`${component.name}`)) {
                formValue = formData.get(`${component.name}`) as string;
            } else if (
                formData.get(`${component.name}-day`)
                && formData.get(`${component.name}-month`)
                && formData.get(`${component.name}-year`)
            ) {
                formValue = [
                    formData.get(`${component.name}-year`),
                    formData.get(`${component.name}-month`),
                    formData.get(`${component.name}-day`),
                ].join('-') as string;
            }
        } else {
            formValue = formData.get(component.name) as string;
        }

        rawFormData[component.name] = formValue;

        console.log({ component, formValue, id });

        if (component.required && !formValue) {
            errors.push({
                field: component.id,
                href: `#${id}`,
                message: `"${component.label}" is required`,
                fieldMessage: 'This field is required.',
            });
        }
    });

    if (errors.length > 0) {
        return {
            message: 'error',
            errors,
        };
    }

    let next = '';

    if (typeof nextPage === 'string') {
        next = nextPage;
    } else {
        next = nextPage.default;

        nextPage.options?.every(({ field, value, page }) => {
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
