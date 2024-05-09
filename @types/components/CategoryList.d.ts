declare namespace ScotGov.Component {
    namespace CategoryList {
        type Layouts = 'list' | 'grid';
        type Spacing = 'narrow';
    }

    interface CategoryItem extends WrapperTag {
        children?: never,
        title: string,
        text?: string,
        link?: string,
        headingLevel?: ScotGov.HeadingLevels,
    }

    interface CategoryList extends WrapperTag {
        items?: never,
        layout?: CategoryList.Layouts,
        spacing?: CategoryList.Spacing,
    }
}
