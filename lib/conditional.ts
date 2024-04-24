export const parseCondition:ScotGov.Lib.FormConditions.ParseCondition = ({
    field: conditionalField,
    value: conditionValue,
    operator: conditionType = '===',
}, formState) => {
    const conditionalValue = formState[conditionalField];
    switch (conditionType) {
        case '>':
        case 'gt':
            return conditionValue > conditionalValue;

        case '<':
        case 'lt':
            return conditionValue < conditionalValue;

        case '>=':
        case 'gte':
            return conditionValue >= conditionalValue;

        case '<=':
        case 'lte':
            return conditionValue <= conditionalValue;

        case 'contains':
        case 'includes':
            return (
                Array.isArray(conditionalValue)
                    ? conditionalValue.includes(conditionValue)
                    : String(conditionalValue).includes(String(conditionValue))
            );

        default:
            return conditionValue === conditionalValue;
    }
};

export const parseConditions:ScotGov.Lib.FormConditions.ParseConditions = (
    conditions,
    formState,
    type = 'and',
) => {
    let conditionsMet = false;

    conditions.every((condition) => {
        let conditionMet = false;

        if (typeof (condition as ScotGov.FormCondition).conditions !== 'undefined') {
            conditionMet = parseConditions(
                (condition as ScotGov.FormCondition).conditions,
                formState,
                (condition as ScotGov.FormCondition).type,
            );
        } else {
            conditionMet = parseCondition(
                condition as ScotGov.FormConditionItem,
                formState,
            );
        }

        if (!conditionMet && type === 'and') {
            conditionsMet = false;
            return false;
        }

        if (conditionMet) {
            conditionsMet = true;
            return true;
        }

        return true;
    });

    return conditionsMet;
};

export const parseConditional:ScotGov.Lib.FormConditions.ParseConditional = (
    conditional,
    formState,
) => {
    if (Array.isArray(conditional)) {
        return parseConditions(
            conditional,
            formState,
        );
    }

    if (!conditional) { return true; }

    return parseConditions(
        conditional?.conditions,
        formState,
        conditional?.type,
    );
};
