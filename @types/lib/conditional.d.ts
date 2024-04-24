declare namespace ScotGov.Lib.FormConditions {
    type ParseCondition = (
        condition: ScotGov.FormConditionItem,
        formState: ScotGov.FormContext.FormState,
    ) => boolean;

    type ParseConditions = (
        conditions: ScotGov.FormConditions,
        formState: ScotGov.FormContext.FormState,
        type?: 'and' | 'or',
    ) => boolean;

    type ParseConditional = (
        conditional: FormCondition | FormConditions,
        formState: ScotGov.FormContext.FormState,
    ) => boolean;
}
