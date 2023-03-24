declare module '*';

interface Window {
    /* eslint-disable @typescript-eslint/no-explicit-any */

    DS: { [key:string]: any },
    dialogPolyfill: any,
    dataLayer: any,

    /* eslint-enable @typescript-eslint/no-explicit-any */
}

namespace NodeJS {
    interface Process {
        browser: boolean,
    }
}

namespace WebFrontEnd {
    type BenefitNames = 'pip' | 'pipsrti' | 'dla' | 'srti' | 'ra' | 'common';
    type RAAppliedBenefits = 'raadp' | 'racdp';

    interface ServerSideError {
        ErrorMessage: string,
        ShortErrorMessage?: string,
    }

    interface Title {
        title: string,
        caption?: string,
        metadata?: Metadata.Item[] | undefined,
    }

    interface DashboardItem {
        client: string,
        applicationType: string,
        lastSaved: string,
        resumeLink: string,
    }

    namespace ApplicationTypes {
        interface Type {
            name: string,
            applyFor: string,
            hubTitle: string,
        };
    }

    interface ApplicationTypes {
        [key:string]: ApplicationTypes.Type;
    }

    namespace Pages {
        namespace FormPage {
            interface Query {
                [key: string]: string,
                application: string,
                section: string,
                screen: string,
            }
        }

        namespace Application {
            interface Query {
                [key: string]: string,
                application: string,
            }
        }
    }

    interface Page {
        title: PageHeader,
        navigation: WebFrontEnd.Link[],
    }
}
