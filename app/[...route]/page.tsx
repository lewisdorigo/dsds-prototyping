import React, { isValidElement } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Component, Components, FormComponent } from 'dsds-react/dist/utils/types';

// import handleSubmit from './submit-handler';
import Layout from '@dsds-react/layout/Layout';
import PageHeader from '@dsds-react/components/PageHeader';
import ComponentsHelper from '@dsds-react/components/ComponentHelper';

import Details from '@dsds-react/components/Details';

import SectionHeader from '@/components/SectionHeader';
import { getData, getAllRoutes } from '@/lib/routeAction';

import Form from './form';
import Feedback from './feedback';

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
    return getData(route).then(({ pageTitle, pageHeader }) => {
        let title:string = 'Social Security Scotland';

        if (pageTitle) {
            title = (
                Array.isArray(pageTitle)
                    ? pageTitle.join(' - ')
                    : pageTitle
            );
        } else if (pageHeader && typeof pageHeader.title === 'string') {
            title = pageHeader.title;
        }

        return { title };
    }).catch(() => notFound());
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
    const { pageHeader, partOf, content: rawContent } = data;
    const {
        header,
        partner,
        navigation,
        list,
        grid,
        footer,
        sidebar,
        feedback,
    } = data;

    const content:Components = rawContent.map((item) => {
        if (
            !item
            || typeof item !== 'object'
            || !Object.prototype.hasOwnProperty.call(item, 'type')
            || !Object.prototype.hasOwnProperty.call(item, 'name')
            || isValidElement(item)
        ) {
            return item;
        }

        return {
            ...item as Component | FormComponent,
            validation: undefined,
        };
    });

    return (
        <Layout
            layout={data.layout}
            header={(
                <>
                    { partOf && <SectionHeader {...partOf} /> }
                    <PageHeader {...pageHeader} />
                    { header && <ComponentsHelper components={header} />}
                </>
            )}
            partner={partner && <ComponentsHelper components={partner} />}
            navigation={navigation && <ComponentsHelper components={navigation} />}
            list={list && <ComponentsHelper components={list} />}
            grid={grid && <ComponentsHelper components={grid} />}
            footer={footer && <ComponentsHelper components={footer} />}
            sidebar={sidebar && <ComponentsHelper components={sidebar} />}
            feedback={(
                <>
                    <Feedback />
                    { feedback && <ComponentsHelper components={feedback} /> }
                </>
            )}
        >
            <Form {...data} content={content} />

            { process.env.NODE_ENV === 'development' && (
                <Details label="View page details">
                    <pre>
                        <code>{ JSON.stringify(data, undefined, 4) }</code>
                    </pre>
                </Details>
            )}
        </Layout>
    );
};

export default Page;
