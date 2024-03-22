declare namespace ScotGov.Component {
    interface Pagination extends React.AllHTMLAttributes<HTMLDivElement> {
        currentIndex?: number,
        eachSideOfCurrent?: number,
        pages: string[],
    }
}
