declare namespace ScotGov.Component {
    namespace Metadata {
        interface Item {
            name: string,
            value: string | ReactNode | ReactNode[],
            hideName?: boolean,
            isLabel?: boolean,
        }
    }

    interface Metadata extends React.AllHTMLAttributes<HTMLDListElement> {
        inline?: boolean,
        items: Metadata.Item[],
        className?: string,
    }
}
