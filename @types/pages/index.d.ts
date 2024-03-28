declare namespace ScotGov {
    namespace Pages {
        interface NextPageOption {
            field: string,
            value?: string,
            isNull?: boolean,
            method?: (formData:FormData) => boolean,
            page: string,
        }

        interface FormPage extends Page {
            nextButton?: boolean | string,
            backButton?: boolean | string,
            nextPage: string | {
                default: string,
                options: NextPageOption[],
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
