declare namespace ScotGov.Component {
    interface NotificationBanner extends ScotGov.Component.WrapperTag {
        icon? : boolean | string,
        success? : boolean,
        hasClose? : boolean,
        variant?: 'success' | 'cookie-success',
    }
}
