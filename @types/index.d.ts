declare namespace ScotGov {
    type BenefitNames = 'pip' | 'pipsrti' | 'dla' | 'srti' | 'ra' | 'common';
    type RAAppliedBenefits = 'raadp' | 'racdp';

    interface Title {
        title: string,
        caption?: string,
        metadata?: Metadata.Item[] | undefined,
    }

    interface DashboardItem {
        id: string,
        client: string,
        formType: keyof FormTypes,
        lastSaved: Date,
        resume?: string,
    }

    namespace FormTypes {
        interface Type {
            name: string,
            applyFor: string,
            hubTitle: string,
        }
    }

    interface FormTypes {
        [key:string]: FormTypes.Type,
    }

    type FormValidation = (value:unknown, formData?:FormData) => boolean | string;

    interface Field<Type = unknown, Items = undefined, Additional = never> {
        type?: Type,
        name: string,
        id: string,
        label?: string,
        labelHidden?: boolean,
        reviewLabel?: string,
        text?: string,
        hintText?: string,
        value?: string,
        className?: string,
        required?: boolean,
        items?: Items[],
        additional?: Additional,
        conditional?: {
            hidden: boolean,
            field: string | string[],
            value: string | string[],
            type?: string,
        },
        error?: string | boolean,
        validation?: FormValidation[],
    }

    namespace Form {
        interface Error {
            field: string,
            href?: string,
            message: string,
            fieldMessage?: string,
        }

        type Value = string | string[];

        interface State {
            message: string,
            errors?: Error[],
            values?: { [key:string]: Value },
        }
    }
}
