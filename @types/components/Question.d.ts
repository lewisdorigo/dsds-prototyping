declare namespace ScotGov.Component.Field {
    interface Question extends ScotGov.Field, ScotGov.Component.WrapperTag {
        name?: string,
        'data-module'?: string,
    }
}
