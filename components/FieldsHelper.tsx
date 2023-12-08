import React from 'react';

import Question from './Question';
import Input from './Input';

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

    switch (field.type) {
        default:
            return (
                <Question {...field}>
                    <Input {...field} />
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
