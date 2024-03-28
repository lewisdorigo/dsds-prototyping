declare namespace ScotGov.Component {
    namespace Wrapper {
        type Background = (
            'white'
            | 'grey'
            | 'blue'
            | 'darkblue'
            | 'teal'
            | 'darkteal'
            | 'green'
            | 'darkgreen'
            | 'orange'
            | 'red'
            | 'pink'
            | 'purple'
            | 'brown'
            | 'black'
        );
    }

    interface Wrapper extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLDivElement> {
        tag?: 'div',
        hasBackground?: boolean | Wrapper.Background,
    }
}
