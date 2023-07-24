import { readFile } from 'node:fs/promises';
import { join as makePath } from 'path';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PageHeader from '@/components/PageHeader';
import ComponentsHelper from '@/components/ComponentsHelper';
import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';
import Wrapper from '@/components/Wrapper';

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
async function getData(route:string[]):Promise<WebFrontEnd.Page> {
    const relPath = makePath(process.cwd(), 'routes', ...route, 'data.json');

    const fileContents = await readFile(relPath, { encoding: 'utf8' });
    return JSON.parse(fileContents);
}

export async function generateMetadata({
    params: {
        route,
    },
}:PageRoute) {
    const data = await getData(route).catch(() => notFound());

    return {
        title: data.title.title,
    };
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
        hasNextButton,
        hasBackButton,
    } = data;

    return (
        <>
            <Wrapper>
                <PageHeader {...title} />
            </Wrapper>
            <Wrapper>
                <ComponentsHelper components={components} />

                { (hasNextButton || hasBackButton) && (
                    <ButtonGroup>
                        { hasBackButton && (
                            <Button
                                variants="cancel"
                                icon="chevron_left"
                                iconSide="left"
                                // onClick={() => window.history.back() }
                            >
                                Back
                            </Button>
                        )}
                        { hasNextButton && (
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

                <pre>
                    <code
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(data, undefined, 4),
                        }}
                    />
                </pre>
            </Wrapper>
        </>
    );
};

export default Page;
