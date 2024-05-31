declare namespace ScotGov.Component {
    interface ConfirmationMessage extends React.AllHTMLAttributes<HTMLDivElement> {
        title: string,
        content?: React.ReactNode,
        headingLevel: ScotGov.HeadingLevels,
    }
}
