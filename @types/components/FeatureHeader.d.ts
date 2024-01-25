declare namespace ScotGov.Component {
    interface FeatureHeader {
        title: string,
        content?: string,
        imageData?: Image | undefined,
        className?: string,
        background?: string,
        wideText?: boolean | undefined,
        'aria-label'?: string,
    }
}


