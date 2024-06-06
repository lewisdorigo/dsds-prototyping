declare namespace ScotGov.Component {
    namespace Accordion {
        interface Item extends React.AllHTMLAttributes<HTMLDivElement> {
            title: string,
            open?: boolean,
            id: string,
            headingLevel?: ScotGov.HeadingLevels,
        }
    }

    interface Accordion extends React.AllHTMLAttributes<HTMLDivElement> {
        toggleAll?: boolean,
    }
}
