import React from 'react';

import type { Metadata } from 'next';

import PageHeader from '@dsds-react/components/PageHeader';
import Layout from '@dsds-react/layout/Layout';

import Address from './Address';

export const metadata:Metadata = {
    title: 'Patterns',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC = function Page() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    return (
        <Layout
            header={(
                <PageHeader
                    title={pageTitle}
                />
            )}
        >
            <Address />
        </Layout>
    );
};

export default Page;
