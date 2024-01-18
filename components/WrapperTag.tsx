import React, { forwardRef } from 'react';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {ScotGov.Component.WrapperTag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
// eslint-disable-next-line prefer-arrow-callback
const WrapperTag = forwardRef<HTMLDivElement, ScotGov.Component.WrapperTag>(function WrapperTag({
    tag = 'div',
    children,
    ...props
}, ref) {
    return React.createElement(
        tag as string,
        {
            ...props,
            ref,
        },
        children,
    );
});

export default WrapperTag;
