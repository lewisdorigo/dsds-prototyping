namespace WebFrontEnd {
    namespace Pages {
        namespace FormPage {
            interface Page extends Page {
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
    }

    interface Page {
        title: PageHeader,
        components: (string | Field)[],
    }
}
