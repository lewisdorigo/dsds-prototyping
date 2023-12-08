declare namespace ScotGov.Component {
    interface Wrapper extends React.PropsWithChildren, Partial<React.HTMLProps<HTMLDivElement>> {
        tag?: 'div',
        hasBackground?: boolean,
    }
}
