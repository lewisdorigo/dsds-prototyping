import React from 'react';

import Question from './Question';
import Input from './Input';
import Date from './Date';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FieldHelper: React.FC<ScotGov.Component.FieldHelper> = function FieldHelper({
    field,
}) {
    if (typeof field === 'string') {
        return field;
    }

    if (typeof field.type !== 'string') {
        throw new Error('Component does type have a type set.');
    }

    const {
        type,
        additional = {},
        ...data
    } = field;

    switch (field.type) {
        case 'date':
            return (
                <Question {...data} additional={additional}>
                    <Date
                        {...data}
                        {...additional}
                    />
                </Question>
            );
        default:
            return (
                <Question {...data} additional={additional}>
                    <Input
                        type={type as ScotGov.Component.Field.Input.Types}
                        {...data}
                        {...additional}
                    />
                </Question>
            );
            break;
    }
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FieldsHelper: React.FC<ScotGov.Component.FieldsHelper> = function FieldsHelper({
    fields,
}) {
    return fields.map((field, index) => {
        const key = `field-${index}`;
        return <FieldHelper key={key} field={field} />;
    });
};

export default FieldsHelper;
