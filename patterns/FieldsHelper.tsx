import React from 'react';

import Question from '@/components/Question';
import Input from '@/components/Input';
import Date from '@/components/Date';

import autop from '@/lib/autop';
import Warning from '@/components/Warning';
import WrapperTag from '@/components/WrapperTag';
import Radios from '@/components/Radio';
import Checkboxes from '@/components/Checkbox';
import Details from '@/components/Details';
import FileDownload from '@/components/FileDownload';
import Pagination from '@/components/Pagination';
import SequentialNavigation from '@/components/SequentialNavigation';

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
                            <li key={key}>{item as string}</li>
                        );
                    }) }
                </WrapperTag>
            );

        case 'radios':
            return (
                <Radios {...data as ScotGov.Component.Field.Radios} />
            );

        case 'checkboxes':
            return (
                <Checkboxes {...data as ScotGov.Component.Field.Checkboxes} />
            );

        case 'details':
            return (
                <Details
                    id={data.id}
                    label={data.label || ''}
                >
                    {data.text && (
                        <div dangerouslySetInnerHTML={{ __html: autop(data.text)}} />
                    )}
                    {data.items && (
                        <FieldsHelper
                            fields={data.items as (ScotGov.Field<unknown, unknown, unknown>|string)[]}
                        />
                    )}
                </Details>
            );

        case 'download':
            return (
                <FileDownload
                    title={data.label || ''}
                    metadata={data.metadata}
                    link={data.link}
                />
            );

        case 'pagination':
            return (
                <Pagination
                    currentIndex={data.current}
                    pages={data.items as string[]}
                />
            );

        case 'sequential-navigation':
            return (
                <SequentialNavigation {...data as ScotGov.Component.SequentialNavigation} />
            );

        case 'warning':
            return (
                <Warning>{field.text}</Warning>
            );

        case 'date':
            return (
                <Question {...data as ScotGov.Component.Field.Date}>
                    <Date {...data as ScotGov.Component.Field.Date} />
                </Question>
            );

        default:
            return (
                <Question {...data as ScotGov.Component.Field.Input}>
                    <Input
                        type={type as ScotGov.Component.Field.Input.Types}
                        {...data}
                        items={undefined}
                        {...additional as ScotGov.Component.Field.Input.Additional}
                    />
                </Question>
            );
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
