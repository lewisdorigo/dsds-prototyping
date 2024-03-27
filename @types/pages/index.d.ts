declare namespace ScotGov {
    namespace Pages {
        interface FormPage extends Page {
            nextButton?: boolean | string,
            backButton?: boolean | string,
            nextPage: string | {
                default: string,
                options: {
                    field: string,
                    value: string,
                    page: string,
                }[],
            },
        }
    }

    interface Page {
        title: PageHeader,
        components: (string | Field<unknown, unknown, unknown>)[],
        partOf?: ScotGov.Component.SectionHeader,
        route?: string,
    }
}
