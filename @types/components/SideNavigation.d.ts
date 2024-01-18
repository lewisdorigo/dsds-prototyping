declare namespace ScotGov.Component {
    namespace SideNavigation {
        interface Item {
            label: React.ReactNode,
            link: string,
            items?: Item[],
        }

        interface List {
            id: string,
            level?: number,
            items: Item[],
        }
    }

    interface SideNavigation extends React.AllHTMLAttributes<HTMLDivElement> {
        items:SideNavigation.Item[],
    }
}
