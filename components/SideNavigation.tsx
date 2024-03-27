import React from 'react';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SideNavigationList:React.FC<
    ScotGov.Component.SideNavigation.List
> = function SideNavigationList({
    id = 'side-navigation',
    level = 0,
    items,
}) {
    const idName = `${id}-${level}`;
    return (
        <ul className="ds_side-navigation__list" id={idName}>
            { items.map(({ label, link, items: children }, index) => {
                const key = `${id}-${index}`;

                return (
                    <li
                        key={key}
                        className={classNames(
                            'ds_side-navigation__item',
                            (
                                children && children.length
                                    ? 'ds_side-navigation__item--has-children'
                                    : ''
                            ),
                            (
                                children && children.length
                                    ? 'ds_side-navigation__item--has-children--expanded'
                                    : ''
                            ),
                        )}
                    >
                        <a
                            href={link}
                            className="ds_side-navigation__link"
                        >
                            { label }
                        </a>
                        { children && children.length > 0 && (
                            <SideNavigationList
                                id={key}
                                level={level + 1}
                                items={children}
                            />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SideNavigation:React.FC<ScotGov.Component.SideNavigation> = function SideNavigation({
    items,
    id = 'side-navigation',
    'aria-label': ariaLabel = 'Sections',
    className,
    ...props
}) {
    return (
        <nav
            className={classNames(
                'ds_side-navigation',
                className,
            )}
            aria-label={ariaLabel}
            data-module="ds-side-navigation"
            id={id}
            {...props}
        >
            <input
                type="checkbox"
                className="fully-hidden js-toggle-side-navigation"
                id={`show-${id}`}
                aria-controls={`${id}-0`}
            />
            { /* eslint-disable jsx-a11y/label-has-associated-control */ }
            <label
                className="ds_side-navigation__expand ds_link"
                htmlFor={`show-${id}`}
            >
                <span className="visually-hidden">Show all</span>
                Pages in this section
                <span className="ds_side-navigation__expand-indicator" />
            </label>
            { /* eslint-enable jsx-a11y/label-has-associated-control */ }

            <SideNavigationList id={id} level={0} items={items} />
        </nav>
    );
};

export default SideNavigation;
