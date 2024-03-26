import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

import FormFields from './form';

export const metadata:Metadata = {
    title: 'Form page',
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
                    caption="Patterns"
                />
            </Wrapper>
            <Wrapper>
                <FormFields />
            </Wrapper>
        </>
    );
};

export default Page;
