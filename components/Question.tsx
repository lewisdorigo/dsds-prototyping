'use client';

import React from 'react';

import Label from './Label';
import HintText from './HintText';
import ErrorMessage from './ErrorMessage';
import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Field.Question} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Question:React.FC<ScotGov.Component.Field.Question> = function Question({
    tag = 'div',
    className,
    children,
    label,
    id,
    hintText,
    text,
    error,
}) {
    const errorText = typeof error === 'string' ? error : 'An error occurred.';

    return (
        <WrapperTag
            tag={tag}
            id={`${id}-question`}
            className={classNames(
                'ds_question',
                error ? 'ds_question--error' : '',
                className,
            )}
        >
            {
                tag === 'fieldset'
                    ? <legend className="ds_label">{ label }</legend>
                    : <Label htmlFor={id}>{ label }</Label>
            }
            { hintText && <HintText text={hintText} /> }
            { error && <ErrorMessage text={errorText} /> }
            { text }
            { children }
        </WrapperTag>
    );
};

export default Question;
