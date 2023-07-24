'use client';

import React from 'react';
import classNames from '../lib/classNames';

const allowedInputTypes = [
    'color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
];

const Input:React.FC<WebFrontEnd.Field.Input> = function Input({
    type: defaultType,
    inputMode: defaultMode,
    name,
    id,
    className,
    value,
    error,
    width = 'fixed-20',
    onChange: defaultOnChange,
    onBlur: defaultOnBlur,
    ...props
}) {
    let type = defaultType as React.HTMLInputTypeAttribute;
    let inputMode = defaultMode;

    if (!allowedInputTypes.includes(type)) {
        type = 'text';
    }

    if (type === 'number' && !inputMode) {
        type = 'text';
        inputMode = 'numeric';
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const defaultReturn = defaultOnChange ? defaultOnChange(event) : undefined;

        return defaultReturn;
    };

    const handleBlur = (event:React.FocusEvent<HTMLInputElement>) => {
        const defaultReturn = defaultOnBlur ? defaultOnBlur(event) : undefined;

        event.target.value = event.target.value.trim();
        return defaultReturn;
    };

    return (
        <input
            type={type}
            inputMode={inputMode}
            id={id}
            name={name}
            defaultValue={value}
            className={classNames(
                'ds_input',
                width ? `ds_input--${width}` : '',
                error ? 'ds_input--error' : '',
                className,
            )}
            onChange={handleChange}
            onBlur={handleBlur}
            {...props}
        />
    );
};

export default Input;
