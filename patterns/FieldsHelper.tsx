import React from 'react';

import Question from '@/components/Question';
import Input from '@/components/Input';
import Date from '@/components/Date';

import autop from '@/lib/autop';
import Warning from '@/components/Warning';
import WrapperTag from '@/components/WrapperTag';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FieldHelper: React.FC<ScotGov.Pattern.FieldHelper> = function FieldHelper({
    field,
}) {
    if (typeof field === 'string') {
        return (
            <div dangerouslySetInnerHTML={{__html: autop(field) }} />
        );
    }

    if (typeof field.type !== 'string') {
        throw new Error('Component does type have a type set.');
    }

    const {
        type,
        additional = {},
        ...data
    } = field;

    switch (type) {
        case 'list':
        case 'bullet-list':
        case 'ordered-list':
            return (
                <WrapperTag tag={type === 'ordered-list' ? 'ol' : 'ul'}>
                    { field.items?.map((item, index) => {
                        const key = `${field.id}-list-${index}`;
                        return (
                            <li key={key}>
                                {item}
                            </li>
                        );
                    }) }
                </WrapperTag>
            );

        case 'warning':
            return (
                <Warning>{ field.text }</Warning>
            );
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
const FieldsHelper: React.FC<ScotGov.Pattern.FieldsHelper> = function FieldsHelper({
    fields,
    errors,
    values,
}) {
    return fields.map((field, index) => {
        const key = `field-${index}`;
        const error = (
            errors && typeof field !== 'string'
                ? errors.filter(({ field: errorField }) => errorField === field.id)
                : []
        );

        const value = (
            typeof field !== 'string' && values
                ? values[field.name]
                : undefined
        );

        const fieldValue = (
            field && typeof field === 'object'
                ? {
                    ...field,
                    value,
                    error: (
                        error.length > 0
                            ? error[0].fieldMessage || error[0].message
                            : undefined
                    ),
                }
                : field
        );

        return <FieldHelper key={key} field={fieldValue} />;
    });
};

export default FieldsHelper;
