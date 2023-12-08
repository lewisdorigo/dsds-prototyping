declare namespace ScotGov.Component {
    interface SiteNavigation extends Partial<React.HTMLProps<HTMLDivElement>> {
        id?: string,
        className?: string,
        'aria-label'?: string,
        menuItems: ScotGov.Link[],
    }
}
