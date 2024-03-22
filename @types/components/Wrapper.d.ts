declare namespace ScotGov.Component {
    interface Wrapper extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLDivElement> {
        tag?: 'div',
        hasBackground?: boolean,
    }
}
