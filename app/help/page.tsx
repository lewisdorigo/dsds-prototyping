import type { Metadata } from 'next';

import { PageHeader } from '@dsds-react/components/PageHeader';
import { Layout } from '@dsds-react/layout/Layout';

export const metadata:Metadata = {
    title: 'Help',
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
            <p>
                Using the prototype toolkit can be a bit daunting at first. So here’s how to get
                started.
            </p>
        </Layout>
    );
};

export default Page;
