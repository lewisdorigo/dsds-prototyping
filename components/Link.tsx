import React from 'react';
import NextLink from 'next/link';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Link} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Link:React.FC<ScotGov.Component.Link> = function Link({
    text,
    href,
    target,
    className,
    baseClass = 'ds_link',
    rel,
    children,
    tabText = true,
    ...props
}) {
    const linkRel = target === '_blank' || target === '_new' ? 'noreferrer noopener' : '';
    const newTabText = typeof tabText === 'string' ? tabText : '(opens in a new tab)';

    return (
        <NextLink
            className={classNames(baseClass, className)}
            href={href}
            target={target}
            rel={rel || linkRel}
            {...props}
        >
            { text }
            { children }
            { (target === '_blank' || target === '_new') && (
                <>
                    { tabText && ` ${newTabText}` }
                    { !tabText && <span className="visually-hidden">{ newTabText }</span> }
                </>
            )}
        </NextLink>
    );
};

export default Link;
