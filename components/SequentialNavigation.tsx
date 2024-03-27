import React from 'react';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SequentialNavigationItem:React.FC<
    ScotGov.Component.SequentialNavigation.Item
> = function SequentialNavigationItem({
    type = 'previous',
    label,
    link,
}) {
    let typeClass:string;
    let side:string;
    let buttonLabel:string;

    switch (type) {
        case 'next':
            typeClass = 'next';
            side = 'right';
            buttonLabel = 'Next';
            break;

        default:
            typeClass = 'prev';
            side = 'left';
            buttonLabel = 'Previous';
            break;
    }

    return (
        <div
            className={classNames(
                'ds_sequential-nav__item',
                `ds_sequential-nav__item--${typeClass}`,
            )}
        >
            <a
                href={link}
                className={classNames(
                    'ds_sequential-nav__button',
                    `ds_sequential-nav__button--${side}`,
                )}
            >
                <span className="ds_sequential-nav__text" data-label={buttonLabel}>
                    { label }
                </span>
            </a>
        </div>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SequentialNavigation:React.FC<
    ScotGov.Component.SequentialNavigation
> = function SequentialNavigation({
    next,
    prev,
    className,
    ...props
}) {
    return (
        <nav
            className={classNames(
                'ds_sequential-nav',
                className,
            )}
            {...props}
        >
            { prev && (
                <SequentialNavigationItem type="prev" {...prev} />
            )}
            { next && (
                <SequentialNavigationItem type="next" {...next} />
            )}
        </nav>
    );
};

export default SequentialNavigation;
