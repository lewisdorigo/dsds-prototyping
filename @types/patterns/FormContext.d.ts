declare namespace ScotGov {
    namespace FormContext {
        type FormValue = string | number;
        type FormValues = FormValue | FormValue[];

        interface FormState {
            [key:string]: FormValues,
        }

        type SetFormState = (key:string, value:FormValues) => void;
    }

    interface FormContext {
        formState: FormContext.FormState,
        setFormState: FormContext.SetFormState,
    }
}
