declare namespace WebFrontEnd {
    interface PageHeader extends Partial<React.HTMLProps<HTMLDivElement>> {
        title: string,
        caption?: string,
        metadata?: Metadata.Item[] | undefined,
        className?: string,
        'aria-label'?: string,
        headingLevel?: keyof JSX.IntrinsicElements,
    }
}
