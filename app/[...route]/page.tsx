import React from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// import handleSubmit from './submit-handler';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Details from '@/components/Details';
import SectionHeader from '@/components/SectionHeader';

import { getData, getAllRoutes } from '@/lib/routeAction';

import Form from './form';

interface PageRoute {
    params: {
        route: string[],
    },
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
 * @returns {(string[])[]}
 */
export async function generateStaticParams() {
    const routes = await getAllRoutes();

    return routes.map((route) => ({
        route: route.split('/'),
    }));
}

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

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
    const { title, partOf } = data;
    const components = data.components.map((item) => {
        if (typeof item !== 'string' && item.validation) {
            const {
                validation, // eslint-disable-line @typescript-eslint/no-unused-vars
                ...field
            } = item;

            return field;
        }

        return item;
    });

    return (
        <>
            <Wrapper>
                {partOf && <SectionHeader {...partOf} />}
                <PageHeader {...title} />
            </Wrapper>
            <Wrapper>
                <Form {...data} components={components} />

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
