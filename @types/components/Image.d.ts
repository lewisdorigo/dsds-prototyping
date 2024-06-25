declare namespace ScotGov.Component {
    interface Image extends Partial<React.HTMLProps<HTMLImageElement>> {
        caption?: React.ReactNode,
        ratio?: true | AspectBox.Ratio,
    }
}
