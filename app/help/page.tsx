import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

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
        <>
            <Wrapper>
                <PageHeader
                    title={pageTitle}
                />
            </Wrapper>
            <Wrapper>
                <p>
                    Using the prototype toolkit can be a bit daunting at first. So here’s how to get
                    started.
                </p>
            </Wrapper>
        </>
    );
};

export default Page;
