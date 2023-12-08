declare namespace ScotGov.Component {
    interface Pagination extends React.HTMLProps<HTMLDivElement> {
        currentIndex?: number,
        eachSideOfCurrent?: number,
        pages: string[],
    }
}
