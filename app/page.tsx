import React, { isValidElement } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// import handleSubmit from './submit-handler';
import type { SideNavigationItem } from 'dsds-react/dist/components/SideNavigation/SideNavigation.type';
import type { Component, Components, FormComponent } from 'dsds-react/dist/utils/types';

import { Layout } from '@dsds-react/layout/Layout';
import { PageHeader } from '@dsds-react/components/PageHeader';
import { SideNavigation } from '@dsds-react/components/SideNavigation';
import { Details } from '@dsds-react/components/Details';
import { ComponentsHelper } from '@dsds-react/components/ComponentHelper';

import SectionHeader from '@/components/SectionHeader';

import { getData } from '@/lib/routeAction';

import Form from './[...route]/form';
import Feedback from './[...route]/feedback';

/**
 * @param {PageRoute} props - The page route parameters
 * @returns {Promise<Metadata>}
 */
export function generateMetadata():Promise<Metadata> {
    return getData(['index']).then(({ pageTitle, pageHeader }) => {
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

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC = async function Page() {
    const data = await getData(['index']).catch(() => notFound());

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

    const navItems:SideNavigationItem[] = [];
    const content:Components = rawContent.map((item) => {
        if (
            !item
            || typeof item !== 'object'
            || !Object.prototype.hasOwnProperty.call(item, 'type')
            || isValidElement(item)
        ) {
            return item;
        }

        const component = item as Component | FormComponent;

        if (component.type === 'group') {
            navItems.push({
                content: (component as Component).label,
                href: `#${component.id}`,
            });
        }

        return {
            ...component,
            validation: undefined,
        };
    });

    return (
        <Layout
            layout={data.layout}
            header={(
                <>
                    {partOf && (
                        <SectionHeader {...partOf} />
                    )}
                    <PageHeader {...pageHeader} />
                    {header && <ComponentsHelper components={header} />}
                </>
            )}
            partner={partner && <ComponentsHelper components={partner} />}
            navigation={navigation && <ComponentsHelper components={navigation} />}
            list={list && <ComponentsHelper components={list} />}
            grid={grid && <ComponentsHelper components={grid} />}
            footer={footer && <ComponentsHelper components={footer} />}
            sidebar={(
                <>
                    <SideNavigation items={navItems} />
                    { sidebar && <ComponentsHelper components={sidebar} /> }
                </>
            )}
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
