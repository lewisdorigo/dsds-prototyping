import React from 'react';

// import Image from 'next/image';

import Question from '@/components/Question';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Date from '@/components/Date';
import Warning from '@/components/Warning';
import WrapperTag from '@/components/WrapperTag';
import Radios from '@/components/Radio';
import Checkboxes from '@/components/Checkbox';
import Details from '@/components/Details';
import FileDownload from '@/components/FileDownload';
import Pagination from '@/components/Pagination';
import SequentialNavigation from '@/components/SequentialNavigation';
import Grid from '@/components/Grid';

import autop from '@/lib/autop';
import Select from '@/components/Select';
import Conditional from '@/components/Conditional';
import Image from '@/components/Image';
import CategoryList, { CategoryItem } from '@/components/CategoryList';
import Card from '@/components/Card';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const FieldHelper:React.FC<ScotGov.Pattern.FieldHelper> = function FieldHelper({
    field,
}) {
    if (typeof field === 'string') {
        return autop(field);
    }

    if (typeof field.type !== 'string') {
        console.error(
            'Component does type have a type set.',
            field,
        );

        throw new Error('Component does type have a type set.');
    }

    const {
        type,
        conditional,
        additional = {},
        ...data
    } = field;

    if (conditional) {
        return (
            <Conditional conditional={conditional}>
                <FieldHelper
                    field={{
                        ...field,
                        conditional: undefined,
                    }}
                />
            </Conditional>
        );
    }

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
            /* eslint-disable @typescript-eslint/no-use-before-define */
            return (
                <Details
                    id={data.id}
                    label={data.label || ''}
                >
                    {data.text && autop(data.text)}
                    {data.items && (
                        <FieldsHelper
                            fields={(
                                data.items as (ScotGov.Field<unknown, unknown, unknown>|string)[]
                            )}
                        />
                    )}
                </Details>
            );
            /* eslint-enable @typescript-eslint/no-use-before-define */

        case 'download':
            return (
                <FileDownload
                    title={data.label || ''}
                    metadata={(data as ScotGov.Component.FileDownload).metadata}
                    link={(data as ScotGov.Component.FileDownload).link}
                />
            );

        case 'pagination':
            return (
                <Pagination
                    currentIndex={(data as ScotGov.Component.Pagination).currentIndex}
                    pages={data.items as string[]}
                />
            );

        case 'sequential-navigation':
            return (
                <SequentialNavigation {...data as ScotGov.Component.SequentialNavigation} />
            );

        case 'warning':
            return (
                <Warning>{autop(field.text)}</Warning>
            );

        case 'date':
            return (
                <Question {...data as ScotGov.Component.Field.Date}>
                    <Date {...data as ScotGov.Component.Field.Date} />
                </Question>
            );

        case 'grid':
            return (
                <Grid columns={(data as ScotGov.Component.Grid).columns}>
                    { data.items?.map((item, index) => {
                        const key = `field-${data.id}-${index}`;
                        return (
                            <FieldHelper key={key} field={item as string|ScotGov.Field} />
                        );
                    })}
                </Grid>
            );

        case 'image':
            return (
                <Image {...data} />
            );

        case 'select':
            return (
                <Question {...data as ScotGov.Component.Field.Select} items={undefined}>
                    <Select
                        {...data as ScotGov.Component.Field.Select}
                    />
                </Question>
            );

        case 'textarea':
            return (
                <Question {...data as ScotGov.Component.Field.TextArea}>
                    <TextArea
                        {...data}
                        items={undefined}
                    />
                </Question>
            );

        case 'category-list':
            return (
                <CategoryList {...data} items={undefined}>
                    { data.items?.map((item, index) => {
                        const key = `field-${data.id}-${index}`;

                        if (typeof item === 'string') {
                            return (
                                <li key={key}>
                                    { item }
                                </li>
                            );
                        }

                        if (!item) { return ''; }

                        const {
                            type: itemType,
                            ...itemProps
                        } = item as ScotGov.Field<unknown, unknown, unknown>;

                        if (itemType === 'card') {
                            return (
                                <Card
                                    key={key}
                                    tag="li"
                                    {...itemProps as unknown as ScotGov.Component.Card}
                                />
                            );
                        }

                        if (itemType) {
                            return (
                                <li key={key}>
                                    <FieldHelper
                                        key={key}
                                        field={{ type: itemType, ...itemProps }}
                                    />
                                </li>
                            );
                        }

                        return (
                            <CategoryItem
                                key={key}
                                {...itemProps as unknown as ScotGov.Component.CategoryItem}
                            />
                        );
                    }) }
                </CategoryList>
            );

        default:
            return (
                <Question {...data as ScotGov.Component.Field.Input}>
                    <Input
                        type={type as ScotGov.Component.Field.Input.Types}
                        {...data}
                        {...additional as ScotGov.Component.Field.Input.Additional}
                        items={undefined}
                    />
                </Question>
            );
    }
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FieldsHelper:React.FC<ScotGov.Pattern.FieldsHelper> = function FieldsHelper({
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
                    value: value || field.value,
                    error: (
                        error.length > 0
                            ? error[0].fieldMessage || error[0].message
                            : undefined
                    ),
                }
                : field
        );

        return <FieldHelper key={key} field={fieldValue as string|ScotGov.Field} />;
    });
};

export default FieldsHelper;
