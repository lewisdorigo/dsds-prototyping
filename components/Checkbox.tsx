'use client';

import React, { useEffect, useRef } from 'react';
import Checks from '@scottish-government/design-system/src/forms/checkbox/checkboxes';
import classNames from '../lib/classNames';
import Question from './Question';
import HintText from './HintText';

/**
 * @param {ScotGov.Component.Field.Checkboxes.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Checkbox:React.FC<ScotGov.Component.Field.Checkboxes.Item> = function Checkbox({
    name,
    id,
    className,
    label,
    value,
    checked,
    size,
    hintText,
    exclusive,
    ...props
}) {
    return (
        <div
            className={classNames(
                'ds_checkbox',
                size ? 'ds_checkbox--small' : '',
            )}
        >
            <input
                type="checkbox"
                id={id}
                name={name}
                value={value}
                defaultChecked={checked}
                className={classNames(
                    'ds_checkbox__input',
                    className,
                )}
                aria-describedby={hintText ? `${id}-hint` : undefined}
                data-behaviour={exclusive ? 'exclusive' : undefined}
                {...props}
            />
            <label
                htmlFor={id}
                className="ds_checkbox__label"
            >
                { label }
            </label>
            { hintText && (<HintText id={`${id}-hint`} text={hintText} />)}
        </div>
    );
};

/**
 * @param {ScotGov.Component.Field.Checkboxes} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Checkboxes:React.FC<ScotGov.Component.Field.Checkboxes> = function Checkboxes({
    name,
    id,
    className,
    text,
    hintText,
    size,
    items,
    label,
    error,
    value = [],
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            new Checks(ref.current).init();
        }
    }, [ref]);

    return (
        <Question
            id={id}
            tag="fieldset"
            label={label}
            error={error}
            text={text}
            hintText={hintText}
            data-module="ds-checkboxes"
        >
            <div
                className={classNames(
                    'ds_checkboxes',
                    className,
                )}
                ref={ref}
            >
                {items?.map((item, index) => {
                    const key = `${id}-${index}`;
                    return (
                        <React.Fragment key={key}>
                            {item.exclusive && (
                                <p className="ds_checkbox-separator">or</p>
                            )}
                            <Checkbox
                                {...item}
                                name={name}
                                id={key}
                                size={size}
                                defaultChecked={value.includes(item.value)}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </Question>
    );
};

export default Checkboxes;
