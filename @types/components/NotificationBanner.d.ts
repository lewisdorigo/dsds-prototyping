declare namespace ScotGov.Component {
    interface NotificationBanner extends ScotGov.Component.WrapperTag {
        caption: Caption,
        icon? : boolean | undefined,
        success? : boolean | undefined,
        hasClose? : boolean | undefined,
    }
    interface Caption {
        text: string,
        link?: string,
        linkText?: string,
    }
}
