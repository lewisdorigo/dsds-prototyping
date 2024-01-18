declare namespace ScotGov.Component {
    namespace SiteHeader {
        interface Branding {
            title?: string,
        }
    }

    interface SiteHeader extends React.AllHTMLAttributes<HTMLDivElement> {
        className?: string,
        'aria-label'?: string,
        menuItems?: Link[],
    }
}
