import { Types as InputTypes } from 'dsds-react/dist/components/TextInput';
import { Types as TextAreaTypes } from 'dsds-react/dist/components/TextArea';
import { Types as ButtonTypes } from 'dsds-react/dist/components/Button';
import { Types as CategoryListTypes } from 'dsds-react/dist/components/CategoryList';
import { Types as FeatureHeaderTypes } from 'dsds-react/dist/components/FeatureHeader';
import { Types as AspectBoxTypes } from 'dsds-react/dist/components/AspectBox';

const data = {
    pageHeader: {
        title: 'Prototype Toolkit',
    },
    content: [
        'This is something that you’ll be able to use to build up pages using the Digital Scotland Design System.',
        '<hr />',
        {
            type: 'group',
            id: 'component-buttons',
            label: 'Buttons',
            items: [
                {
                    type: 'button-group',
                    label: 'Styles',
                    items: [
                        {
                            type: 'button',
                            label: 'Button',
                        },
                        {
                            type: 'button',
                            label: 'Secondary',
                            style: ButtonTypes.Style.Secondary,
                        },
                        {
                            type: 'button',
                            label: 'Cancel',
                            style: ButtonTypes.Style.Cancel,
                        },
                        {
                            type: 'button',
                            label: 'Disabled',
                            disabled: true,
                        },
                    ],
                },
                {
                    type: 'button-group',
                    label: 'Sizes',
                    items: [
                        {
                            type: 'button',
                            label: 'Regular',
                        },
                        {
                            type: 'button',
                            label: 'Small',
                            size: ButtonTypes.Size.Small,
                        },
                    ],
                },
                {
                    type: 'button-group',
                    label: 'Widths',
                    items: [
                        {
                            type: 'button',
                            label: 'Flexible',
                            size: ButtonTypes.Width.Flexible,
                        },
                        {
                            type: 'button',
                            label: 'Fixed',
                            width: ButtonTypes.Width.Fixed,
                        },
                        {
                            type: 'button',
                            label: 'Max',
                            width: ButtonTypes.Width.Max,
                        },
                    ],
                },
                {
                    type: 'button-group',
                    label: 'Icons',
                    items: [
                        {
                            type: 'button',
                            label: 'Back',
                            style: ButtonTypes.Style.Cancel,
                            icon: 'chevron_left',
                            iconPosition: ButtonTypes.IconPosition.Left,
                        },
                        {
                            type: 'button',
                            label: 'Continue',
                            icon: 'chevron_right',
                            iconPosition: ButtonTypes.IconPosition.Right,
                        },
                        {
                            type: 'button',
                            label: 'Search',
                            icon: 'search',
                            iconPosition: ButtonTypes.IconPosition.IconOnly,
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            type: 'group',
            id: 'component-inputs',
            label: 'Text inputs',
            items: [
                {
                    id: 'field-default',
                    label: 'Field',
                    type: 'text',
                    width: null,
                    required: true,
                },
                {
                    type: 'fieldset',
                    label: 'Fixed width',
                    items: [
                        {
                            id: 'field-fixed-20',
                            label: '20 characters',
                            type: 'text',
                            width: InputTypes.Width.Fixed20,
                            required: true,
                        },
                        {
                            id: 'field-fixed-10',
                            label: '10 characters',
                            type: 'text',
                            width: InputTypes.Width.Fixed10,
                            required: true,
                        },
                        {
                            id: 'field-fixed-5',
                            label: '5 characters',
                            type: 'text',
                            width: InputTypes.Width.Fixed5,
                            required: true,
                        },
                        {
                            id: 'field-fixed-4',
                            label: '4 characters',
                            type: 'text',
                            width: InputTypes.Width.Fixed4,
                            required: true,
                        },
                        {
                            id: 'field-fixed-3',
                            label: '3 characters',
                            type: 'text',
                            width: InputTypes.Width.Fixed3,
                            required: true,
                        },
                        {
                            id: 'field-fixed-2',
                            label: '2 characters',
                            type: 'text',
                            width: InputTypes.Width.Fixed2,
                            required: true,
                        },
                    ],
                },
                {
                    type: 'fieldset',
                    label: 'Fluid width',
                    items: [
                        {
                            id: 'field-fluid-three-quarters',
                            label: 'Three quarters',
                            type: 'text',
                            width: InputTypes.Width.FluidThreeQuarter,
                            required: true,
                        },
                        {
                            id: 'field-fluid-two-thirds',
                            label: 'Two thirds',
                            type: 'text',
                            width: InputTypes.Width.FluidTwoThirds,
                            required: true,
                        },
                        {
                            id: 'field-fluid-half',
                            label: 'One half',
                            type: 'text',
                            width: InputTypes.Width.FluidHalf,
                            required: true,
                        },
                        {
                            id: 'field-fluid-one-third',
                            label: 'One third',
                            type: 'text',
                            width: InputTypes.Width.FluidThird,
                            required: true,
                        },
                        {
                            id: 'field-fluid-one-quarter',
                            label: 'One quarter',
                            type: 'text',
                            width: InputTypes.Width.FluidQuarter,
                            required: true,
                        },
                    ],
                },
                {
                    type: 'fieldset',
                    label: 'Icons',
                    items: [
                        {
                            id: 'field-search',
                            label: 'Search',
                            type: 'text',
                            icon: 'search',
                            required: true,
                        },
                        {
                            id: 'field-currency',
                            label: 'Currency',
                            type: 'currency',
                            symbol: '£',
                            required: true,
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Inline fields',
                    items: [
                        {
                            type: 'fieldset',
                            label: 'How long did you live at that address?',
                            hintText: 'For example, 4 years and 3 months',
                            items: [
                                {
                                    type: 'group',
                                    inline: true,
                                    items: [
                                        {
                                            type: 'number',
                                            label: 'Years',
                                            id: 'how-long-years',
                                            width: InputTypes.Width.Fixed2,
                                            required: true,
                                        },
                                        {
                                            type: 'number',
                                            label: 'Months',
                                            id: 'how-long-months',
                                            width: InputTypes.Width.Fixed2,
                                            required: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Date picker',
                    items: [
                        {
                            id: 'field-dob',
                            name: 'field-dob',
                            label: 'Date of birth',
                            type: 'date',
                            hintText: 'For example, 04 02 1992',
                            required: true,
                        },
                        {
                            id: 'field-dob-multiple',
                            label: 'Date of birth',
                            name: 'field-dob-multiple',
                            type: 'date',
                            hintText: 'For example, 04 02 1992',
                            multiple: true,
                            required: true,
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            type: 'group',
            id: 'component-textarea',
            label: 'Textarea',
            items: [
                {
                    id: 'textarea',
                    type: 'textarea',
                    label: 'Textarea',
                    required: true,
                },
                {
                    id: 'textarea-long',
                    type: 'textarea',
                    label: 'Long Textarea',
                    size: TextAreaTypes.Size.Large,
                    attributes: { rows: 7 },
                    required: true,
                },
                {
                    id: 'textarea-short',
                    type: 'textarea',
                    label: 'Short Textarea',
                    size: TextAreaTypes.Size.Small,
                    required: true,
                },
            ],
        },
        '<hr />',
        {
            type: 'group',
            id: 'component-select',
            label: 'Select',
            items: [
                {
                    id: 'select-dropdown',
                    type: 'select',
                    label: 'Select a component',
                    required: true,
                    items: [
                        {
                            label: 'Accordion',
                            value: 'accordion',
                        },
                        {
                            label: 'Breadcrumbs',
                            value: 'breadcrumbs',
                        },
                        {
                            label: 'Button',
                            value: 'button',
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            type: 'group',
            id: 'component-checkboxes',
            label: 'Checkboxes',
            items: [
                {
                    id: 'checkboxes-default',
                    name: 'checkboxes-default',
                    type: 'checkbox',
                    label: 'What topics are you interested in?',
                    hintText: 'Select as many as you like',
                    required: true,
                    items: [
                        {
                            id: 'checkbox-default-1',
                            label: 'Education',
                            value: 'education',
                        },
                        {
                            id: 'checkbox-default-2',
                            label: 'Housing',
                            value: 'housing',
                        },
                        {
                            id: 'checkbox-default-3',
                            label: 'Transport',
                            value: 'transport',
                        },
                    ],
                },
                {
                    id: 'checkboxes-small',
                    name: 'checkboxes-small',
                    type: 'checkbox',
                    size: 'small',
                    label: 'What topics are you interested in?',
                    hintText: 'Select as many as you like',
                    required: true,
                    items: [
                        {
                            id: 'checkbox-small-1',
                            label: 'Education',
                            value: 'education',
                        },
                        {
                            id: 'checkbox-small-2',
                            label: 'Housing',
                            value: 'housing',
                        },
                        {
                            id: 'checkbox-small-3',
                            label: 'Transport',
                            value: 'transport',
                        },
                    ],
                },
                {
                    id: 'checkboxes-exclusive',
                    name: 'checkboxes-exclusive',
                    type: 'checkbox',
                    label: 'Do you receive any of these benefits?',
                    hintText: 'Select all that apply',
                    required: true,
                    items: [
                        {
                            id: 'checkbox-exclusive-1',
                            label: 'Universal Credit',
                            value: 'universal-credit',
                        },
                        {
                            id: 'checkbox-exclusive-2',
                            label: 'Pension Credit',
                            value: 'pension-credit',
                        },
                        {
                            id: 'checkbox-exclusive-3',
                            label: "Income-based Job Seeker's Allowance",
                            value: 'job-seekers',
                        },
                        {
                            id: 'checkbox-exclusive-4',
                            label: 'No, I do not receive any of these benefits',
                            value: 'none',
                            exclusive: true,
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            type: 'group',
            id: 'component-radios',
            label: 'Radio buttons',
            items: [
                {
                    id: 'radios-default',
                    type: 'radio',
                    name: 'radios-default',
                    label: 'Was this page useful?',
                    hintText: 'Select an option',
                    required: true,
                    items: [
                        {
                            id: 'radios-default-yes',
                            label: 'Yes',
                            value: 'yes',
                        },
                        {
                            id: 'radios-default-no',
                            label: 'No',
                            value: 'no',
                        },
                        {
                            id: 'radios-default-maybe',
                            label: 'Maybe',
                            value: 'maybe',
                        },
                    ],
                },
                {
                    id: 'radios-small',
                    type: 'radio',
                    name: 'radios-small',
                    label: 'Was this page useful?',
                    hintText: 'Select an option',
                    required: true,
                    size: 'small',
                    items: [
                        {
                            id: 'radios-small-yes',
                            label: 'Yes',
                            value: 'yes',
                        },
                        {
                            id: 'radios-small-no',
                            label: 'No',
                            value: 'no',
                        },
                        {
                            id: 'radios-small-maybe',
                            label: 'Maybe',
                            value: 'maybe',
                        },
                    ],
                },
                {
                    id: 'radios-inline',
                    type: 'radio',
                    name: 'radios-inline',
                    label: 'Was this page useful?',
                    hintText: 'Select an option',
                    required: true,
                    inline: true,
                    items: [
                        {
                            id: 'radios-inline-yes',
                            label: 'Yes',
                            value: 'yes',
                        },
                        {
                            id: 'radios-inline-no',
                            label: 'No',
                            value: 'no',
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-error-summary',
            type: 'group',
            label: 'Error Summary',
            items: [
                {
                    id: 'error-summary-default',
                    type: 'error-summary',
                    items: [
                        'There is a problem',
                        {
                            fieldId: 'field-default',
                            message: 'There is a problem with this field field',
                        },
                        {
                            fieldId: 'field-default',
                            href: 'https://design-system.gov.scot',
                            message: 'Error with link to some other place',
                        },
                    ],
                    attributes: {
                        autoFocus: false,
                    },
                },
            ],
        },
        '<hr />',
        {
            id: 'sequential-navigation',
            type: 'group',
            label: 'Sequential navigation',
            items: [
                {
                    id: 'sequential-navigation-default',
                    type: 'sequential-navigation',
                    items: [
                        {
                            id: 'sequential-navigation-default-1',
                            label: 'Apply for or renew a Blue Badge',
                            link: {
                                href: '#',
                            },
                        },
                        {
                            id: 'sequential-navigation-default-2',
                            label: 'Eligibility: who can have one?',
                            link: {
                                href: '#',
                            },
                        },
                    ],
                },
                {
                    id: 'sequential-navigation-no-next',
                    type: 'sequential-navigation',
                    items: [
                        {
                            id: 'sequential-navigation-no-next-1',
                            label: 'Apply for or renew a Blue Badge',
                            link: {
                                href: '#',
                            },
                        },
                    ],
                },
                {
                    id: 'sequential-navigation-no-previous',
                    type: 'sequential-navigation',
                    items: [
                        null,
                        {
                            id: 'sequential-navigation-no-previous-1',
                            label: 'Eligibility: who can have one?',
                            link: {
                                href: '#',
                            },
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-pagination',
            type: 'group',
            label: 'Pagination',
            items: [
                {
                    id: 'pagination-default',
                    type: 'pagination',
                    items: [
                        '#page-1',
                        '#page-2',
                        '#page-3',
                        '#page-4',
                        '#page-5',
                        '#page-6',
                        '#page-7',
                        '#page-8',
                        '#page-9',
                        '#page-10',
                    ],
                },
                {
                    id: 'pagination-middle',
                    type: 'pagination',
                    currentIndex: 4,
                    items: [
                        '#page-1',
                        '#page-2',
                        '#page-3',
                        '#page-4',
                        '#page-5',
                        '#page-6',
                        '#page-7',
                        '#page-8',
                        '#page-9',
                        '#page-10',
                    ],
                },
                {
                    id: 'pagination-increase-shown',
                    type: 'pagination',
                    currentIndex: 4,
                    eachSideOfCurrent: 2,
                    items: [
                        '#page-1',
                        '#page-2',
                        '#page-3',
                        '#page-4',
                        '#page-5',
                        '#page-6',
                        '#page-7',
                        '#page-8',
                        '#page-9',
                        '#page-10',
                    ],
                },
                {
                    id: 'pagination-last',
                    type: 'pagination',
                    currentIndex: 9,
                    items: [
                        '#page-1',
                        '#page-2',
                        '#page-3',
                        '#page-4',
                        '#page-5',
                        '#page-6',
                        '#page-7',
                        '#page-8',
                        '#page-9',
                        '#page-10',
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-side-nav',
            type: 'group',
            label: 'Side navigation',
            items: [
                {
                    type: 'side-navigation',
                    id: 'side-navigation-default',
                    items: [
                        {
                            href: '#',
                            content: 'Apples',
                            items: [
                                {
                                    href: '#',
                                    content: 'Green Apples',
                                    items: [
                                        {
                                            href: '#',
                                            content: 'Bramley',
                                            current: true,
                                        },
                                        {
                                            href: '#',
                                            content: 'Granny Smith',
                                        },
                                    ],
                                },
                                {
                                    href: '#',
                                    content: 'Red Apples',
                                },
                            ],
                        },
                        {
                            href: '#',
                            content: 'Bananas',
                        },
                        {
                            href: '#',
                            content: 'Cherries',
                        },
                        {
                            href: '#',
                            content: 'Raspberries',
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-page-header',
            type: 'group',
            label: 'Page headers',
            items: [
                {
                    id: 'page-header-default',
                    type: 'page-header',
                    label: 'Guide',
                    title: 'Apply for or renew a disabled parking permit',
                    metadata: [
                        {
                            label: 'Last updated',
                            value: new Date(),
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-feature-headers',
            type: 'group',
            label: 'Feature headers',
            items: [
                {
                    type: 'feature-header',
                    id: 'feature-header-default',
                    title: 'Design standards',
                    content: 'The patterns included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland.',
                    image: {
                        src: '//picsum.photos/256/256',
                        alt: '',
                    },
                },
                {
                    type: 'group',
                    label: 'Coloured background',
                    items: [
                        {
                            type: 'feature-header',
                            id: 'feature-header-bg',
                            title: 'Design standards',
                            content: (
                                <p>
                                    The patterns included here have been developed for use by
                                    government, public sector and third sector non-commercial
                                    organisations in Scotland.
                                </p>
                            ),
                            hasBackground: true,
                            image: {
                                src: '//picsum.photos/256/256',
                                alt: '',
                            },
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Wide text',
                    items: [
                        {
                            type: 'feature-header',
                            id: 'feature-header-wide',
                            title: 'Design standards',
                            content: 'The patterns included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland.',
                            hasBackground: true,
                            style: FeatureHeaderTypes.Style.Wide,
                            image: {
                                src: '//picsum.photos/256/256',
                                alt: '',
                            },
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-notification-panel',
            type: 'group',
            label: 'Notification panels',
            items: [
                {
                    type: 'notification-panel',
                    label: 'Thank you',
                    content: 'Your Saltire Scholarship Application form has been successfully submitted.',
                },
                {
                    type: 'notification-panel',
                    success: false,
                    label: 'Thank you',
                    content: 'Your Saltire Scholarship Application form has been successfully submitted.',
                },
            ],
        },
        '<hr />',
        {
            id: 'component-notification-banner',
            type: 'group',
            label: 'Notification banners',
            items: [
                {
                    id: 'notification-banner-default',
                    type: 'notification-banner',
                    content: '<p>We need to tell you about <a href="#">something</a></p>',
                },
                {
                    id: 'notification-banner-icon',
                    type: 'notification-banner',
                    icon: true,
                    content: (
                        <p>
                            Something bad has
                            {' '}
                            <a href="#site-top">happened</a>
                        </p>
                    ),
                },
                {
                    id: 'notification-banner-icon',
                    type: 'notification-banner',
                    icon: 'checkbox',
                    hasClose: false,
                    content: (
                        <p>
                            Something bad has
                            {' '}
                            <a href="#site-top">happened</a>
                        </p>
                    ),
                },
            ],
        },
        '<hr />',
        {
            id: 'component-accordion',
            type: 'group',
            label: 'Accordion',
            items: [
                {
                    type: 'accordion',
                    id: 'accordion-default',
                    items: [
                        {
                            id: 'accordion-default-1',
                            label: 'Accordion Item 1',
                            content: 'Accordion 1 Content',
                        },
                        {
                            id: 'accordion-default-2',
                            label: 'Accordion Item 2',
                            content: (
                                <p>Accordion 2 Content</p>
                            ),
                        },
                        {
                            id: 'accordion-default-3',
                            label: 'Accordion Item 3',
                            content: 'Accordion 3 <strong>Content</strong>',
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-tabs',
            type: 'group',
            label: 'Tabs',
            items: [
                {
                    type: 'tabs',
                    id: 'tabs-default',
                    items: [
                        {
                            id: 'tab-default-1',
                            label: 'Tab Item 1',
                            content: 'Tab 1 Content',
                        },
                        {
                            id: 'tab-default-2',
                            label: 'Tab Item 2',
                            content: (
                                <p>Tab 2 Content</p>
                            ),
                        },
                        {
                            id: 'tab-default-3',
                            label: 'Tab Item 3',
                            content: 'Tab 3 <strong>Content</strong>',
                        },
                    ],
                },
                {
                    type: 'tabs',
                    id: 'tabs-unbordered',
                    bordered: false,
                    items: [
                        {
                            id: 'tab-unbordered-1',
                            label: 'Tab Item 1',
                            content: 'Tab 1 Content',
                        },
                        {
                            id: 'tab-unbordered-2',
                            label: 'Tab Item 2',
                            content: (
                                <p>Tab 2 Content</p>
                            ),
                        },
                        {
                            id: 'tab-unbordered-3',
                            label: 'Tab Item 3',
                            content: 'Tab 3 <strong>Content</strong>',
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-contact',
            type: 'contact-details',
            label: 'Contact',
            items: [
                {
                    label: 'Address',
                    items: [
                        (
                            <>
                                Scottish Government
                                <br />
                                St Andrew’s House
                                <br />
                                Regent Road
                                <br />
                                Edinburgh
                                <br />
                                EH1 3DG
                            </>
                        ),
                    ],
                },
                {
                    label: 'Email',
                    items: [
                        '<a href="mailto:email@gov.scot">email@gov.scot</a>',
                    ],
                },
                {
                    label: 'Phone',
                    items: [
                        (
                            <>
                                0123 456 7000
                                <br />
                                Main line is open 8am to 5pm
                                <br />
                                <a href="https://www.gov.uk/call-charges">
                                    Find out about call charges on GOV.UK
                                </a>
                            </>
                        ),
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-download',
            type: 'group',
            label: 'File download',
            items: [
                {
                    type: 'download',
                    label: "Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive",
                    fileType: 'pdf',
                    metadata: [
                        {
                            label: 'File type',
                            value: '44 page PDF',
                        },
                        {
                            label: 'File size',
                            value: '7.2 MB',
                        },
                    ],
                },
                {
                    type: 'download',
                    highlight: true,
                    label: "Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive",
                    fileType: 'pdf',
                    metadata: [
                        {
                            label: 'File type',
                            value: '44 page PDF',
                        },
                        {
                            label: 'File size',
                            value: '7.2 MB',
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-breadcrumbs',
            type: 'group',
            label: 'Breadcrumbs',
            items: [
                {
                    id: 'breacrumbs-default',
                    type: 'breadcrumbs',
                    items: [
                        {
                            href: '#',
                            content: 'Home',
                        },
                        {
                            href: '#',
                            content: 'Justice and the law',
                        },
                        {
                            href: '#',
                            content: 'Your rights and the law',
                        },
                        {
                            href: '#',
                            content: 'Data sharing of personal information',
                        },
                    ],
                },
                {
                    id: 'component-breadcrumbs-hide',
                    type: 'group',
                    label: 'Hide Current Page',
                    items: [
                        {
                            id: 'breacrumbs-default',
                            type: 'breadcrumbs',
                            hideCurrent: true,
                            items: [
                                {
                                    href: '#',
                                    content: 'Home',
                                },
                                {
                                    href: '#',
                                    content: 'Justice and the law',
                                },
                                {
                                    href: '#',
                                    content: 'Your rights and the law',
                                },
                                {
                                    href: '#',
                                    content: 'An incredibly long nonsense title, as an example of a problematically long title, for demonstration purposes only',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        '<hr />',
        {
            id: 'component-section-header',
            type: 'group',
            label: 'Section header',
            items: [
                {
                    type: 'section-header',
                    id: 'section-header-default',
                    title: 'Adult disability payment',
                    link: '#',
                },
            ],
        },
        '<hr />',
        {
            id: 'component-conformation-message',
            type: 'group',
            label: 'Confirmation message',
            items: [
                {
                    type: 'confirmation',
                    label: 'Landlord added successfully',
                    content: (
                        <>
                            You have successfully added
                            {' '}
                            <strong>John Smith</strong>
                            {' '}
                            to the application.
                        </>
                    ),
                },
            ],
        },
        '<hr />',
        {
            id: 'component-category-list',
            type: 'group',
            label: 'Category list',
            items: [
                {
                    type: 'category-list',
                    id: 'category-list-default',
                    items: [
                        {
                            type: 'category-item',
                            id: 'category-list-item-1',
                            label: 'Item 1',
                            link: {
                                href: '#',
                            },
                            content: 'This is some content for the category item',
                        },
                        {
                            type: 'category-item',
                            id: 'category-list-item-2',
                            label: 'Item 2 (No link)',
                            content: 'This is some content for the category item',
                        },
                        {
                            type: 'category-item',
                            id: 'category-list-item-3',
                            label: 'Item 3',
                            link: {
                                href: '#',
                            },
                            content: 'This is some content for the category item',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Category list (grid)',
                    items: [
                        {
                            type: 'category-list',
                            id: 'category-list-grid',
                            layout: CategoryListTypes.Layout.Grid,
                            items: [
                                {
                                    type: 'category-item',
                                    id: 'category-grid-item-1',
                                    label: 'Item 1',
                                    link: {
                                        href: '#',
                                    },
                                    content: 'This is some content for the category item',
                                },
                                {
                                    type: 'category-item',
                                    id: 'category-grid-item-2',
                                    label: 'Item 2 (No link)',
                                    content: 'This is some content for the category item',
                                },
                                {
                                    type: 'category-item',
                                    id: 'category-grid-item-3',
                                    label: 'Item 3',
                                    link: {
                                        href: '#',
                                    },
                                    content: 'This is some content for the category item',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Category list (cards)',
                    items: [
                        {
                            type: 'category-list',
                            id: 'category-grid-card',
                            layout: CategoryListTypes.Layout.Grid,
                            items: [
                                {
                                    type: 'card',
                                    id: 'category-grid-card-1',
                                    label: 'Item 1',
                                    link: {
                                        href: '#',
                                    },
                                    content: 'This is some content for the category item',
                                },
                                {
                                    type: 'card',
                                    id: 'category-grid-card-2',
                                    label: 'Item 2 (No link)',
                                    content: 'This is some content for the category item',
                                },
                                {
                                    type: 'card',
                                    id: 'category-grid-card-3',
                                    label: 'Item 3',
                                    link: {
                                        href: '#',
                                    },
                                    content: 'This is some content for the category item',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Category list (image cards)',
                    items: [
                        {
                            type: 'category-list',
                            id: 'category-grid-card',
                            layout: CategoryListTypes.Layout.Grid,
                            items: [
                                {
                                    type: 'card',
                                    id: 'category-grid-card-1',
                                    label: 'Item 1',
                                    image: {
                                        src: '//picsum.photos/256/256/',
                                        alt: 'Placeholder Image',
                                        ratio: AspectBoxTypes.AspectRatio.FourByThree,
                                    },
                                    link: {
                                        href: '#',
                                    },
                                    content: 'This is some content for the category item',
                                },
                                {
                                    type: 'card',
                                    id: 'category-grid-card-2',
                                    label: 'Item 2 (No link)',
                                    image: {
                                        src: '//picsum.photos/256/256/',
                                        alt: 'Placeholder Image',
                                        ratio: AspectBoxTypes.AspectRatio.FourByThree,
                                    },
                                    content: 'This is some content for the category item',
                                },
                                {
                                    type: 'card',
                                    id: 'category-grid-card-3',
                                    label: 'Item 3',
                                    image: {
                                        src: '//picsum.photos/256/256/',
                                        alt: 'Placeholder Image',
                                        ratio: AspectBoxTypes.AspectRatio.FourByThree,
                                    },
                                    link: {
                                        href: '#',
                                    },
                                    content: 'This is some content for the category item',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default data;
