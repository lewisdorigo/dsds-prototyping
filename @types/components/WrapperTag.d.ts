declare namespace WebFrontEnd {
    interface WrapperTag extends React.PropsWithChildren, React.HTMLAttributes<HTMLOrSVGElement> {
        tag?: keyof JSX.IntrinsicElements,
    }
}
