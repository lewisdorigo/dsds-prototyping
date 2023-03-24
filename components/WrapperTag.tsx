import React from 'react';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WrapperTag: React.FC<WebFrontEnd.WrapperTag> = function WrapperTag({
    tag = 'div',
    children,
    ...props
}) {
    const tagName:string = tag || 'div';
    return React.createElement(tagName, props, children);
};

export default WrapperTag;
