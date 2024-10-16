declare namespace ScotGov {
    type BenefitNames = 'pip' | 'pipsrti' | 'dla' | 'srti' | 'ra' | 'common';
    type RAAppliedBenefits = 'raadp' | 'racdp';
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

    namespace Form {
        interface Error {
            fieldId: string,
            href?: string,
            message: React.ReactNode,
            fieldMessage?: React.ReactNode,
        }

        type Value = string | string[];

        interface State {
            message: string,
            errors?: Error[],
            values?: { [key:string]: Value },
        }
    }
}
