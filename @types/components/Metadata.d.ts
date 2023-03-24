declare namespace WebFrontEnd {
    namespace Metadata {
        interface Item {
            name: string,
            value: string,
            hideName?: boolean,
            isLabel?: boolean,
        }
    }

    interface Metadata extends Partial<React.HTMLProps<HTMLDListElement>> {
        items: MetadataItem[],
        className?: string,
    }
}
