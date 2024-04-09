declare namespace ScotGov.Component.Field {
    interface TextArea extends Field<'textarea', undefined, undefined>,
        Partial<React.HTMLProps<HTMLTextAreaElement>>
    { }
}
