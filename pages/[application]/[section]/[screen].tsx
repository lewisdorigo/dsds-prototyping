import React from 'react';

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import Wrapper from '../../../components/Wrapper';
import getApplicationBySlug from '../../../lib/getApplicationBySlug';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const FormScreen:React.FC = function FormScreen() {
    return (
        <>
            <Head>
                <title>Social Security Scotland</title>
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

export default FormScreen;

/**
 * Props to load when rendering the page server-side
 *
 * @param {object} context - The NextJS Page context
 * @returns {object} - The props to use for the page
 */
export const getServerSideProps:GetServerSideProps<
    WebFrontEnd.Page,
    WebFrontEnd.Pages.FormPage.Query
> = async function getServerSideProps(context) {
    let application = '';
    let screen = '';

    if (context.params) {
        ({
            application,
            screen,
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
                caption: details.name,
                title: screen,
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
