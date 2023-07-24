'use client';

import React from 'react';

import Label from './Label';
import HintText from './HintText';
import Error from './Error';
import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

const Question:React.FC<WebFrontEnd.Field.Question> = function Question({
    field,
    tag = 'div',
    className,
    children,
}) {
    const {
        name,
        id,
        hintText,
        error,
    } = field;

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
                    ? <legend className="ds_label">{ name }</legend>
                    : <Label htmlFor={id}>{ name }</Label>
            }
            { hintText && <HintText text={hintText} /> }
            { error && <Error text={error} /> }
            { children }
        </WrapperTag>
    );
};

export default Question;
