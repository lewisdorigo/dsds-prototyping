declare namespace ScotGov.Component {
    namespace Tabs {
        interface Item extends React.HTMLProps<HTMLDivElement> {
            id: string,
            title: string,
            text: React.ReactNode,
        }
    }

    interface Tabs extends React.AllHTMLAttributes<HTMLDivElement> {
        id: string,
        items: Tabs.Item[],
        bordered?: boolean,
    }
}
