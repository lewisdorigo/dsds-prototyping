'use client';

import React from 'react';
import classNames from '../lib/classNames';
import WrapperTag from './WrapperTag';

/**
 * @param {ScotGov.Component.Field.Input} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Tag:React.FC<ScotGov.Component.WrapperTag> = function Tag({
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_tag',
                className,
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

export default Tag;
