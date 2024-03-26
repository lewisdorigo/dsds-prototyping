import React from 'react';

import classNames from '../lib/classNames';
import FieldGroup from './FieldGroup';
import Question from './Question';
import HintText from './HintText';

/**
 * @param {ScotGov.Component.Field.Checkboxes.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Radio:React.FC<ScotGov.Component.Field.Radios.Item> = function Radio({
    name,
    id,
    className,
    label,
    value,
    checked,
    size,
    hintText,
    ...props
}) {
    return (
        <div
            className={classNames(
                'ds_radio',
                size ? 'ds_radio--small' : '',
            )}
        >
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                defaultChecked={checked}
                className={classNames(
                    'ds_radio__input',
                    className,
                )}
                aria-describedby={hintText ? `${id}-hint` : undefined}
                {...props}
            />
            <label
                htmlFor={id}
                className="ds_radio__label"
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
const Radios:React.FC<ScotGov.Component.Field.Radios> = function Checkboxes({
    name,
    id,
    className,
    text,
    hintText,
    size,
    items,
    label,
    inline,
    error,
}) {
    return (
        <Question
            id={id}
            tag="fieldset"
            label={label}
            error={error}
            text={text}
            hintText={hintText}
        >
            <FieldGroup inline={inline} className={className}>
                {items?.map((item, index) => {
                    const key = `${id}-${index}`;
                    return (
                        <React.Fragment key={key}>
                            <Radio
                                {...item}
                                name={name}
                                id={key}
                                size={size}
                            />
                        </React.Fragment>
                    );
                })}
            </FieldGroup>
        </Question>
    );
};

export default Radios;
