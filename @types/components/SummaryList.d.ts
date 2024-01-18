declare namespace ScotGov.Component {
    namespace SummaryList {
        interface Action {
            label: string,
            action: string,
        }

        interface Actions {
            actions: Action[],
        }

        interface Item {
            label: string,
            answer: string,
            actions?: Action[],
            key?: React.Key,
        }
    }

    interface SummaryList<T = HTMLOListElement> extends React.AllHTMLAttributes<T> {
        items: SummaryList.Item[],
        borders?: boolean,
    }
}
