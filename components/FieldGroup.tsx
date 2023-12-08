'use client';

import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Field.Group} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FieldGroup:React.FC<ScotGov.Component.Field.Group> = function FieldGroup({
    tag = 'div',
    className,
    children,
    inline,
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_field-group',
                inline ? 'ds_field-group--inline' : '',
                className,
            )}
        >
            { children }
        </WrapperTag>
    );
};

export default FieldGroup;
