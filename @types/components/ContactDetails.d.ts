declare namespace ScotGov.Component {
    namespace ContactDetails {
        interface SocialItems {
            title: string,
            content?: never,
            socials: {
                [key: string]: {
                    link: string,
                    label?: string,
                },
            },
        }

        interface Item {
            title: string,
            content: React.ReactNode,
            socials?: never,
        }

        type Items = (ContactDetails.Item | ContactDetails.SocialItems)[];

        interface Column {
            items: Items,
        }
    }

    interface ContactDetails extends React.AllHTMLAttributes<HTMLDivElement> {
        headingLevel?: keyof JSX.IntrinsicElements,
        title?: string,
        items?: ContactDetails.Items,
        columns?: ContactDetails.Items[],
    }
}
