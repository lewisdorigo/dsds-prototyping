declare namespace ScotGov.Component {
    namespace TaskList {
        type Status = 'complete' | 'in-progress' | 'cannot-start' | 'not-started';

        interface Item {
            id: string,
            label: string,
            status: Status,
            summary?: string,
            link?: string,
        }

        interface Group {
            heading: string,
            summary?: string,
            ordered?: boolean,
            groups: TaskList[],
        }
    }

    interface TaskList {
        label: string,
        summary?: string,
        sections: TaskList.Item[],
        ordered?: boolean,
    }
}
