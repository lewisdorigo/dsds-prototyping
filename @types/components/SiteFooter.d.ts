declare namespace ScotGov.Component {
    namespace SiteFooter {
        interface Links {
            links: ScotGov.Link[],
        }

        interface Copyright {
            logo?: React.ReactNode,
            link?: string,
            content: string,
        }

        interface Organisation {
            logo: React.ReactElement,
            link?: string,
        }
    }

    interface SiteFooter extends React.AllHTMLAttributes<HTMLDivElement> {
        links?: Link[],
        copyright?: SiteFooter.Copyright,
        org?: SiteFooter.Organisation,
        className?: string,
        'aria-label'?: string,
    }
}
