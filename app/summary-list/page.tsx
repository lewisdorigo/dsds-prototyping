import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import SummaryList from '@/components/SummaryList';
import SummaryCard from '@/components/SummaryCard';

export const metadata:Metadata = {
    title: 'Summary Lists',
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

    const listItems = [
        {
            label: 'Have you had the grant 3 times or more since 1 May 2022?',
            answer: 'No',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Which council area do you live in?',
            answer: 'City of Edinburgh',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you work?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Will you lose earnings because you need to self-isolate?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Have you tested positive for Covid?',
            answer: 'No - I need a PCR test or to rebook a PCR test',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
    ];

    return (
        <>
            <Wrapper>
                <PageHeader
                    title={pageTitle}
                />
            </Wrapper>
            <Wrapper>
                <h2>Summary list</h2>
                <SummaryList
                    items={listItems}
                />

                <h2>Summary list without borders</h2>
                <SummaryList
                    items={listItems}
                    borders={false}
                />

                <h2>Summary Cards</h2>
                <SummaryCard
                    title="Joe Bloggs"
                    items={listItems}
                    actions={[
                        {
                            label: 'Delete',
                            action: '#',
                        },
                        {
                            label: 'Change',
                            action: '#',
                        },
                    ]}
                />
            </Wrapper>
        </>
    );
};

export default Page;
