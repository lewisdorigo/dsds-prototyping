declare namespace ScotGov {
    type BenefitNames = 'pip' | 'pipsrti' | 'dla' | 'srti' | 'ra' | 'common';
    type RAAppliedBenefits = 'raadp' | 'racdp';

    type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

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

    interface FormConditionItem {
        field: string,
        value: string | number,
        operator?: (
            '===' | 'equals'
            | '>' | 'gt'
            | '<' | 'lt'
            | '>=' | 'gte'
            | '<=' | 'lte'
            | 'contains' | 'includes'
        ),
    }

    type FormConditions = (FormConditionItem|FormCondition)[];

    interface FormCondition {
        type?: 'and' | 'or',
        conditions: FormConditions,
    }

    type FormValidation = (value:unknown, formData?:FormData) => boolean | string;

    interface Field<Type = unknown, Items = undefined, Additional = never> {
        type?: Type,
        name: string,
        id: string,
        label?: string,
        labelHidden?: boolean,
        reviewLabel?: string,
        text?: React.ReactNode,
        hintText?: React.ReactNode,
        value?: string,
        className?: string,
        optional?: boolean | string,
        required?: boolean,
        items?: Items[],
        additional?: Additional,
        conditional?: FormCondition | FormConditions,
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
