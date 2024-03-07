import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import { TaskListGroup } from '@/components/TaskList';

export const metadata:Metadata = {
    title: 'Task Lists',
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

    const groups:ScotGov.Component.TaskList[] = [
        {
            label: 'Provide your health details',
            summary: 'Some extra content',
            sections: [
                {
                    id: 'conditions',
                    label: 'Conditions',
                    summary: 'Tell us about your conditions, symptoms and any sensory issues you have.',
                    status: 'complete',
                    link: '#',
                },
                {
                    id: 'medications',
                    label: 'Medications',
                    summary: 'Tell us about any medication you need.',
                    status: 'in-progress',
                    link: '#',
                },
                {
                    id: 'treatments',
                    label: 'Treatments and therapies',
                    summary: 'Tell us about any treatments and therapies you need.',
                    status: 'not-started',
                    link: '#',
                },
                {
                    id: 'contacts',
                    label: 'Contacts and supporting information',
                    summary: 'Share any supporting documents and provide details of people we can talk to about you.',
                    status: 'not-started',
                    link: '#',
                },
            ],
            ordered: true,
        },
        {
            label: 'Review and submit',
            sections: [
                {
                    id: 'check-answers',
                    label: 'Check your answers',
                    summary: 'Review all your answers before submission.',
                    status: 'cannot-start',
                    link: '#',
                },
                {
                    id: 'submit',
                    label: 'Submit your application',
                    status: 'cannot-start',
                    link: '#',
                },
            ],
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
                <TaskListGroup
                    heading="Application Incomplete"
                    summary="Test"
                    ordered
                    groups={groups}
                />
            </Wrapper>
        </>
    );
};

export default Page;
