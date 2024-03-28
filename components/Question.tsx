'use client';

import React, { useEffect, useRef } from 'react';
import CharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';

import Label from './Label';
import HintText from './HintText';
import ErrorMessage from './ErrorMessage';
import WrapperTag from './WrapperTag';

import autop from '../lib/autop';
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
    maxLength,
}) {
    const ref = useRef<HTMLDivElement>(null);
    const errorText = typeof error === 'string' ? error : 'An error occurred.';

    useEffect(() => {
        if (typeof window === 'undefined') { return; }

        if (maxLength) {
            const characterCount = new CharacterCount(ref.current);
            characterCount.init();
        }
    }, [ref, maxLength]);

    return (
        <WrapperTag
            tag={tag}
            id={`${id}-question`}
            className={classNames(
                'ds_question',
                error ? 'ds_question--error' : '',
                className,
            )}
            data-module={classNames(
                maxLength ? 'ds-character-count' : '',
            )}
            ref={ref}
        >
            {
                tag === 'fieldset'
                    ? <legend className="ds_label">{ label }</legend>
                    : <Label htmlFor={id}>{ label }</Label>
            }
            { text && autop(text)}
            { hintText && <HintText text={hintText} /> }
            { error && <ErrorMessage text={errorText} /> }
            { children }
        </WrapperTag>
    );
};

export default Question;
