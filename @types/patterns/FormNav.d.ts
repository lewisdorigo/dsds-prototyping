declare namespace ScotGov.Pattern {
    namespace FormNav {
        interface Button {
            label?: string,
            href?: string,
            enabled?: boolean,
        }
    }

    interface FormNav {
        next?: boolean | string | Button,
        back?: boolean | string | Button,
    }
}
