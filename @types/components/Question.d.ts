declare namespace ScotGov.Component.Field {
    interface Question extends ScotGov.Field<unknown, undefined, unknown>, ScotGov.Component.WrapperTag {
        name?: string,
        'data-module'?: string,
        maxLength?: number,
    }
}
