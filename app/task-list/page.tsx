import type { Metadata } from 'next';

import PageHeader from '@dsds-react/components/PageHeader';
import Layout from '@dsds-react/layout/Layout';

import TaskListGroup from '@dsds-react/components/TaskListGroup';
import { TaskListStatus } from 'dsds-react/dist/components/TaskList/TaskList.type';

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

    const groups = [
        {
            label: 'Provide your health details',
            content: (
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo sed
                    orci tincidunt commodo. Ut dapibus ut urna sodales tristique. Phasellus ut
                    auctor massa. Cras nunc purus, congue sit amet ultricies non, egestas sed arcu.
                    Integer egestas nulla et libero gravida malesuada.
                </p>
            ),
            items: [
                {
                    id: 'conditions',
                    label: 'Conditions',
                    content: 'Tell us about your conditions, symptoms and any sensory issues you have.',
                    status: TaskListStatus.Complete,
                    link: '#',
                },
                {
                    id: 'medications',
                    label: 'Medications',
                    content: 'Tell us about any medication you need.',
                    status: TaskListStatus.InProgress,
                    link: '#',
                },
                {
                    id: 'treatments',
                    label: 'Treatments and therapies',
                    content: 'Tell us about any treatments and therapies you need.',
                    status: TaskListStatus.NotStarted,
                    link: '#',
                },
                {
                    id: 'contacts',
                    label: 'Contacts and supporting information',
                    content: (
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo
                            sed orci tincidunt commodo. Ut dapibus ut urna sodales tristique.
                        </p>
                    ),
                    status: TaskListStatus.NotStarted,
                    link: '#',
                },
            ],
            ordered: true,
        },
        {
            label: 'Review and submit',
            content: (
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo sed
                    orci tincidunt commodo. Ut dapibus ut urna sodales tristique. Phasellus ut
                    auctor massa. Cras nunc purus, congue sit amet ultricies non, egestas sed arcu.
                    Integer egestas nulla et libero gravida malesuada.
                </p>
            ),
            items: [
                {
                    id: 'check-answers',
                    label: 'Check your answers',
                    content: 'Review all your answers before submission.',
                    status: TaskListStatus.CannotStart,
                    link: '#',
                },
                {
                    id: 'submit',
                    label: 'Submit your application',
                    status: TaskListStatus.CannotStart,
                    link: '#',
                },
            ],
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
            <TaskListGroup
                label="Application Incomplete"
                content={(
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo sed
                        orci tincidunt commodo. Ut dapibus ut urna sodales tristique. Phasellus ut
                        auctor massa. Cras nunc purus, congue sit amet ultricies non, egestas sed
                        arcu. Integer egestas nulla et libero gravida malesuada.
                    </p>
                )}
                ordered
                items={groups}
            />
        </Layout>
    );
};

export default Page;
