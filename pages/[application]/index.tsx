import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import Wrapper from '../../components/Wrapper';
import getApplicationBySlug from '../../lib/getApplicationBySlug';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const HubPage:React.FC = function HubPage() {
    const router = useRouter();
    const { application } = router.query;

    return (
        <>
            <Head>
                <title>{ application }</title>
            </Head>

            <Wrapper>
                <p>
                    This is something that you’ll be able to use to build up pages using the
                    {' '}
                    <a href="https://designsystem.gov.scot" target="_blank" rel="noopener noreferrer">
                        Digital Scotland Design System
                    </a>
                    .
                </p>
            </Wrapper>
        </>
    );
};

export default HubPage;

/**
 * Props to load when rendering the page server-side
 *
 * @param {object} context - The NextJS Page context
 * @returns {object} - The props to use for the page
 */
export const getServerSideProps:GetServerSideProps<
    WebFrontEnd.Page,
    WebFrontEnd.Pages.Application.Query
> = async function getServerSideProps(context) {
    let application = '';

    if (context.params) {
        ({
            application,
        } = context.params);
    }

    const details = getApplicationBySlug(application);

    if (!details) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            title: {
                title: details.hubTitle,
            },
            navigation: [
                {
                    text: 'Digital Scotland Design System',
                    href: 'https://designsystem.gov.scot',
                    target: '_blank',
                },
            ],
        },
    };
};
