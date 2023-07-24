import type { Metadata } from 'next';

import PageHeader from '../components/PageHeader';
import Wrapper from '../components/Wrapper';

export const metadata:Metadata = {
    title: 'Prototype Toolkit',
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
        <>
            <Wrapper>
                <PageHeader
                    title={pageTitle}
                    metadata={[
                        {
                            name: 'Last updated',
                            value: <time>July 20th 2023</time>,
                        },
                    ]}
                />
            </Wrapper>
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

export default Page;
