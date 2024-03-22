declare namespace ScotGov.Component {
    interface SummaryCard extends SummaryList<HTMLDivElement> {
        title: string,
        actions?: SummaryList.Action[],
    }
}
