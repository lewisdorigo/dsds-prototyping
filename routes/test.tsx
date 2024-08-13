import * as validation from '@/lib/validation';

const data = {
    pageHeader: {
        label: 'Test Page',
        title: 'Outputting components?',
    },
    content: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Maecenas eleifend</a> dictum lacus, id vulputate nulla egestas in. Donec vitae sapien consectetur, feugiat dolor eget, porttitor turpis. Fusce porttitor viverra feugiat. Donec pretium feugiat posuere. Praesent pharetra justo purus, et venenatis nulla efficitur sit amet. Praesent dignissim nulla nisi, dictum mattis massa pulvinar nec. Maecenas pulvinar nulla enim, at egestas risus elementum a. Proin sed hendrerit risus, nec efficitur turpis. Curabitur id cursus elit, cursus ornare dolor. Donec non tempor sapien. In hac habitasse platea dictumst. Ut malesuada elit blandit, facilisis nibh at, sodales risus.',
        {
            type: 'list',
            items: [
                'National Insurance card',
                'benefit letter',
                'payslip',
                'P60',
            ],
        },
        {
            type: 'confirmation',
            label: 'Landlord added successfully',
            content: 'You have added the landlord <strong>John Smith</strong> to the application.',
        },
        {
            type: 'accordion',
            id: 'accordion',
            items: [
                {
                    id: 'accordion-1',
                    label: 'Accordion 1',
                    content: '<p>Accordion 1 paragraph</p>',
                },
                {
                    id: 'accordion-2',
                    label: 'Accordion 2',
                    content: '<p>Accordion 2 paragraph</p>',
                },
            ],
        },
        {
            type: 'tabs',
            id: 'tabs',
            items: [
                {
                    id: 'tabs-1',
                    label: 'Tab 1',
                    content: '<p>Tab 1 paragraph</p>',
                },
                {
                    id: 'tabs-2',
                    label: 'Tab 2',
                    content: '<p>Tab 2 paragraph</p>',
                },
            ],
        },
        {
            type: 'category-list',
            layout: 'grid',
            spacing: 'narrow',
            items: [
                {
                    type: 'card',
                    label: 'Environment',
                    link: { href: '#' },
                    content: 'Access to and protection of the countryside and managing wildlife on your land',
                    image: {
                        src: 'http://placehold.it/1280x720',
                        alt: 'Hello',
                    },
                },
                {
                    type: 'card',
                    label: 'Environment',
                    link: { href: '#' },
                    content: 'Access to and protection of the countryside and managing wildlife on your land',
                },
                {
                    label: 'Environment',
                    link: { href: '#' },
                    content: 'Access to and protection of the countryside and managing wildlife on your land',
                },
            ],
        },
        {
            type: 'grid',
            columns: 2,
            items: [
                {
                    type: 'image',
                    src: '//picsum.photos/1280/720/',
                    alt: 'Hello',
                    ratio: '43',
                    caption: 'This is a caption',
                },
                {
                    type: 'image',
                    src: '//picsum.photos/1280/720/',
                    alt: 'Hello',
                    ratio: '43',
                },
                {
                    type: 'image',
                    src: '//picsum.photos/1280/720/',
                    alt: 'Hello',
                    ratio: '43',
                },
            ],
        },
        {
            id: 'national-insurance-warning',
            type: 'warning',
            content: 'You do not need to add your National Insurance number. If you do it helps us process your application as quickly as possible.',
        },
        {
            id: 'radios',
            type: 'radio',
            name: 'radios',
            label: 'Was this page useful?',
            hintText: 'Select one',
            required: true,
            items: [
                {
                    id: 'radios-yes',
                    label: 'Yes',
                    value: 'yes',
                },
                {
                    id: 'radios-no',
                    label: 'No',
                    value: 'no',
                    items: [
                        {
                            type: 'textarea',
                            id: 'radios-no-why',
                            name: 'radios-no-why',
                            label: 'Tell us why it wasn’t useful',
                            required: true,
                        },
                    ],
                },
                {
                    id: 'radios-maybe',
                    label: 'Maybe',
                    value: 'maybe',
                },
            ],
        },
        {
            id: 'checkboxes',
            type: 'checkbox',
            name: 'checkboxes',
            label: 'Do you receive any of these benefits?',
            hintText: 'Select all that apply',
            required: true,
            items: [
                {
                    id: 'checkboxes-uc',
                    label: 'Universal credit',
                    value: 'uc',
                },
                {
                    id: 'checkboxes-pc',
                    label: 'Pension credit',
                    value: 'pc',
                },
                {
                    id: 'checkboxes-jsa',
                    label: 'Income-based job seekers allowance',
                    value: 'jsa',
                },
                {
                    id: 'checkboxes-none',
                    label: 'I do not recieve any of these benefits',
                    value: 'none',
                    exclusive: true,
                },
            ],
        },
        {
            id: 'textarea',
            type: 'textarea',
            name: 'textarea',
            label: 'Description',
            required: true,
            conditions: {
                type: 'or',
                conditions: [
                    {
                        fieldId: 'checkboxes',
                        value: 'uc',
                        operator: 'contains',
                    },
                    {
                        fieldId: 'radios',
                        value: 'yes',
                        operator: 'equals',
                    },
                ],
            },
        },
        {
            id: 'details',
            type: 'details',
            label: 'I cannot sign in',
            content: (
                <>
                    <p>This is some text!</p>
                    <ul>
                        <li>A list</li>
                        <li>inside</li>
                        <li>the details</li>
                    </ul>
                </>
            ),
        },
        {
            id: 'download',
            type: 'download',
            label: 'Scotland\'s Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive',
            metadata: [
                {
                    name: 'File type',
                    value: '44 page pdf',
                },
            ],
            link: '#',
        },
        {
            type: 'sequential-navigation',
            id: 'sequential-navigation',
            prev: {
                label: 'Apply for or renew a blue badge',
                link: '#',
            },
            next: {
                label: 'Eligability: who can have one',
                link: '#',
            },
        },
        {
            id: 'select',
            name: 'select',
            type: 'select',
            label: 'Dropdown',
            items: [
                {
                    label: 'Universal credit',
                    value: 'uc',
                },
                {
                    label: 'Pension credit',
                    value: 'pc',
                },
                {
                    label: 'Income-based job seekers allowance',
                    value: 'jsa',
                },
                {
                    label: 'I do not recieve any of these benefits',
                    value: 'none',
                },
            ],
        },
        {
            id: 'nino',
            name: 'nino',
            type: 'text',
            label: 'National Insurance number',
            hintText: 'For example, QQ 12 34 56 C',
            optional: 'if you know it',
            validation: [
                validation.isValidNino(),
                validation.maxLength(4),
                validation.pattern(/^[A-Z]+$/i),
            ],
        },
    ],
    sidebar: [
        'This is in the sidebar',
    ],
    nextButton: 'Continue',
    backButton: false,
    nextPage: {
        default: '/about-you/details',
        options: [
            {
                field: 'nino',
                isNull: true,
                page: '/about-you/nino',
            },
        ],
    },
};

export default data;
