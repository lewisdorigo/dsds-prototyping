declare namespace WebFrontEnd {
    namespace SiteFooter {
        interface Links {
            links: WebFrontEnd.Link[],
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

    interface SiteFooter extends Partial<React.HTMLProps<HTMLDivElement>> {
        links?: Link[],
        copyright?: SiteFooter.Copyright,
        org?: SiteFooter.Organisation,
        className?: string,
        'aria-label'?: string,
    }
}
