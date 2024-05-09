import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Layout from '@/components/Layout';

export const metadata:Metadata = {
    title: 'Page not found',
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
            : 'Page not found'
    );

    return (
        <Layout
            layout="article"
            header={(
                <PageHeader
                    title={pageTitle}
                />
            )}
        >
            <p>
                If you typed the web address, you should check it is correct.
            </p>
            <p>
                If you copied and pasted the web address, you should check that you copied
                the entire address.
            </p>
            <p>
                If you&apos;ve checked the web address is correct and it still does not
                work, or if you selected a link or button,
                {' '}
                <a
                    href="https://www.mygov.scot/contact-social-security-scotland/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    contact Social Security Scotland (opens in a new tab)
                </a>
                {' '}
                if you need to speak to someone about your application.
            </p>
        </Layout>
    );
};

export default Page;
