declare namespace WebFrontEnd {
    namespace SiteHeader {
        interface Branding {
            title?: string,
        }
    }

    interface SiteHeader extends Partial<React.HTMLProps<HTMLDivElement>> {
        className?: string,
        'aria-label'?: string,
        menuItems?: Link[],
    }
}
