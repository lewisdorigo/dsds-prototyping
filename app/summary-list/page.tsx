import type { Metadata } from 'next';

import { PageHeader } from '@dsds-react/components/PageHeader';
import { Layout } from '@dsds-react/layout/Layout';
import { SummaryList } from '@dsds-react/components/SummaryList';
// import SummaryList from '@/components/SummaryList';
import { SummaryCard } from '@dsds-react/components/SummaryCard';

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
            value: 'No',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Which council area do you live in?',
            value: [
                {
                    label: 'Question 1',
                    value: 'City of Edinburgh',
                },
                {
                    label: 'Question 2',
                    value: ['Answer 1', 'Answer 2'],
                },
                {
                    label: 'Question 3',
                    value: [
                        {
                            label: 'Question 3a',
                            value: 'City of Edinburgh',
                        },
                    ],
                },
            ],
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you work?',
            value: ['Answer 1', 'Answer 2'],
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Will you lose earnings because you need to self-isolate?',
            value: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Have you tested positive for Covid?',
            value: 'No - I need a PCR test or to rebook a PCR test',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
    ];

    return (
        <Layout
            header={(
                <PageHeader
                    title={pageTitle}
                />
            )}
        >
            <h2>Summary list</h2>
            <SummaryList
                items={listItems}
                id="summary-list"
            />

            <h2>Summary list without borders</h2>
            <SummaryList
                items={listItems}
                borders={false}
                id="summary-list-borders"
            />

            <h2>Summary Cards</h2>
            <SummaryCard
                id="summary-card"
                label="Joe Bloggs"
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
        </Layout>
    );
};

export default Page;
