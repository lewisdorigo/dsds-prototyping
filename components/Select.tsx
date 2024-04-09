import React from 'react';
import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Field.Select} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Select:React.FC<ScotGov.Component.Field.Select> = function Select({
    name,
    id,
    className,
    value,
    error,
    width = 'fixed-20',
    items = [],
    label, // eslint-disable-line @typescript-eslint/no-unused-vars
    hintText, // eslint-disable-line @typescript-eslint/no-unused-vars
    allowNull = true,
    ...props
}) {
    return (
        <div
            className={classNames(
                'ds_select-wrapper',
                width ? `ds_input--${width}` : '',
                error ? 'ds_input--error' : '',
                className,
            )}
        >
            <select
                id={id}
                name={name}
                className="ds_select"
                defaultValue={value}
                {...props}
            >
                { allowNull && (
                    <option value="" aria-label="Select one" />
                )}
                {items.map(({ value: optValue, label: optLabel }, index) => {
                    const key = `${id}-item-${index}`;
                    return (
                        <option key={key} value={optValue}>
                            {optLabel}
                        </option>
                    );
                })}
            </select>
            <span className="ds_select-arrow" aria-hidden="true" />
        </div>
    );
};

export default Select;
