declare namespace ScotGov.Component {
    namespace SequentialNavigation {
        type Types = 'next' | 'previous';
        interface Item {
            type?: Types,
            label: React.ReactNode,
            link: string,
        }
    }

    interface SequentialNavigation extends React.AllHTMLAttributes<HTMLDivElement> {
        next: MetadataItem,
        prev: MetadataItem,
    }
}
