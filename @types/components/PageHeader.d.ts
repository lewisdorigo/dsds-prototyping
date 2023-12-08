declare namespace ScotGov.Component {
    interface PageHeader extends Title, Partial<React.HTMLProps<HTMLDivElement>> {
        title: string,
        caption?: string,
        metadata?: Metadata.Item[] | undefined,
        className?: string,
        'aria-label'?: string,
        headingLevel?: keyof JSX.IntrinsicElements,
    }
}
