declare namespace ScotGov.Component {
    interface WrapperTag extends React.PropsWithChildren, React.HTMLAttributes<HTMLOrSVGElement> {
        tag?: keyof JSX.IntrinsicElements,
        ref?: React.Ref | undefined,
    }
}
