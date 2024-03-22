import React from 'react';
import { readFile } from 'node:fs/promises';
import { join as makePath } from 'path';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// import handleSubmit from './submit-handler';

import PageHeader from '@/components/PageHeader';
import FieldsHelper from '@/components/FieldsHelper';
import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';
import Wrapper from '@/components/Wrapper';
import Details from '@/components/Details';

interface PageRoute {
    params: {
        route: string[],
    },
}

/**
 * Gets data for a given route.
 *
 * @param {string[]} route - The route to get data for.
 * @returns {Promise} - The route data
 */
async function getData(route:string[]):Promise<ScotGov.Pages.FormPage> {
    const relPath = makePath(process.cwd(), 'routes', ...route, 'data.json');

    const fileContents = await readFile(relPath, { encoding: 'utf8' });
    return JSON.parse(fileContents);
}

/**
 * @param {PageRoute} props - The page route parameters
 * @returns {Promise<Metadata>}
 */
export function generateMetadata({
    params: {
        route,
    },
}:PageRoute):Promise<Metadata> {
    return getData(route).then((data) => ({
        title: data.title.title,
    })).catch(() => notFound());
}

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC<PageRoute> = async function Page({
    params: {
        route,
    },
}) {
    const data = await getData(route).catch(() => notFound());
    const {
        title,
        components,
        nextButton,
        backButton,
    } = data;

    /**
     * @param {FormData} formData - data in the submitted form
     * @returns {object} - Response data for the submission
     */
    async function handleSubmit(formData: FormData) {
        'use server';

        const rawFormData:{[key:string]: string} = {};
        for (let i = 0; i < components.length; i += 1) {
            const component = components[i];

            if (
                typeof component === 'string'
                || !component.type
                || !component.name
                || !formData.has(component.name)
            ) {
                continue; // eslint-disable-line no-continue
            }

            rawFormData[component.name] = formData.get(component.name) as string;
        }

        return {
            message: 'Submitted',
        };
    }

    return (
        <>
            <Wrapper>
                <PageHeader {...title} />
            </Wrapper>
            <Wrapper>
                <form action={handleSubmit}>
                    <FieldsHelper fields={components} />

                    { (nextButton || backButton) && (
                        <ButtonGroup className="ds_!_margin-top--8 ds_!_margin-bottom--0">
                            { backButton && (
                                <Button
                                    variants="cancel"
                                    icon="chevron_left"
                                    iconSide="left"
                                    // onClick={() => window.history.back() }
                                >
                                    Back
                                </Button>
                            )}
                            { nextButton && (
                                <Button
                                    type="submit"
                                    icon="chevron_right"
                                    iconSide="right"
                                >
                                    Save and continue
                                </Button>
                            )}
                        </ButtonGroup>
                    )}
                </form>

                <Details label="View page details">
                    <pre>
                        <code
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(data, undefined, 4),
                            }}
                        />
                    </pre>
                </Details>
            </Wrapper>
        </>
    );
};

export default Page;
