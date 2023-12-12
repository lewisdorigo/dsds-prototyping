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
        additional,
        ...data
    } = field;

    const questionData = data;

    if (typeof additional?.maxlength !== 'undefined') {
        questionData['data-module'] = 'ds-character-count';
    }

    switch (field.type) {
        case 'date':
            return (
                <Question {...questionData}>
                    <Date {...data} {...additional} />
                </Question>
            );
        default:
            return (
                <Question {...questionData}>
                    <Input {...data} {...additional} />
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
