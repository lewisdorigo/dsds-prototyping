declare namespace WebFrontEnd {
    interface SiteNavigation extends Partial<React.HTMLProps<HTMLDivElement>> {
        id?: string,
        className?: string,
        'aria-label'?: string,
        menuItems: WebFrontEnd.Link[],
    }
}
