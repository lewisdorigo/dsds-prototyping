declare namespace ScotGov.Component {
    namespace Layout {
        type Section = ReactNode;
    }

    interface Layout extends ScotGov.Component.WrapperTag {
        layout?: string,

        header?: Layout.Section,
        partner?: Layout.Section,
        navigation?: Layout.Section,
        content?: Layout.Section,
        sidebar?: Layout.Section,
        feedback?: Layout.Section,
    }
}
