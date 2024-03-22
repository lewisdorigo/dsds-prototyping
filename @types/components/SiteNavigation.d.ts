declare namespace ScotGov.Component {
    interface SiteNavigation extends React.AllHTMLAttributes<HTMLDivElement> {
        id?: string,
        className?: string,
        'aria-label'?: string,
        menuItems: ScotGov.Link[],
    }
}
