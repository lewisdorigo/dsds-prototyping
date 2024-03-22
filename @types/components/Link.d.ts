declare namespace ScotGov.Component {
    interface Link extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLAnchorElement> {
        text?: string,
        href: string,
        ref?: Ref<HTMLAnchorElement> | undefined,
        target?: undefined | '_blank' | '_new' | '_self',
        className?: string,
        baseClass?: string,
        tabText?: boolean | string,
    }
}
