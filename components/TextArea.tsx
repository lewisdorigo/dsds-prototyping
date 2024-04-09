'use client';

import React, { useRef } from 'react';
import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Field.Input} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextArea:React.FC<ScotGov.Component.Field.TextArea> = function TextArea({
    name,
    id,
    className,
    value,
    error,
    onChange,
    onBlur,
    label, // eslint-disable-line @typescript-eslint/no-unused-vars
    hintText, // eslint-disable-line @typescript-eslint/no-unused-vars
    rows = 4,
    ...props
}) {
    const inputRef = useRef(null);

    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    };

    const handleBlur = (event:React.FocusEvent<HTMLTextAreaElement>) => {
        const { target } = event;
        target.value = target.value.trim();

        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    };

    return (
        <textarea
            id={id}
            name={name}
            defaultValue={value}
            className={classNames(
                'ds_input',
                error ? 'ds_input--error' : '',
                className,
            )}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={inputRef}
            rows={rows}
            {...props}
        />
    );
};

export default TextArea;
