import type { Title } from 'dsds-react/dist/components/PageHeader/PageHeader.type';
import type { Components } from 'dsds-react/dist/utils/types';
import type { SectionHeader } from '@/components/SectionHeader/SectionHeader.type';

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
        header: Title,
        components: Components,
        partOf?: SectionHeader,
        route?: string,
    }
}
