import React, { forwardRef } from 'react';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {ScotGov.Component.WrapperTag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WrapperTag = forwardRef<React.FC, ScotGov.Component.WrapperTag>(function WrapperTag({
    tag = 'div',
    children,
    ...props
}, ref) {
    const tagName:string = tag || 'div';
    return React.createElement(
        tagName,
        {
            ...props,
            ref,
        },
        children,
    );
});

export default WrapperTag;
