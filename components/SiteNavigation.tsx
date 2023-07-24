'use client';

import React, { useState, useEffect } from 'react';
import MobileMenu from '@scottish-government/pattern-library/src/components/site-navigation/site-navigation';

import Link from './Link';
import Icon from './Icon';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteNavigation: React.FC<WebFrontEnd.SiteNavigation> = function SiteNavigation({
    id,
    className,
    'aria-label': ariaLabel = 'Top Level Navigation',
    menuItems,
    ...props
}) {
    const [menuId] = useState(id || 'site-navigation');
    const menuToggleId = `${menuId}-toggle`;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mobileMenu = document.getElementById(menuId);
            new MobileMenu(mobileMenu).init();
        }
    });

    if (!menuItems || menuItems.length < 1) {
        return null;
    }

    return (
        <>
            <div className="ds_site-header__controls">
                { /* eslint-disable jsx-a11y/label-has-associated-control */ }
                <label
                    aria-controls={menuId}
                    className="ds_site-header__control  js-toggle-menu"
                    htmlFor={menuToggleId}
                >
                    <span className="ds_site-header__control-text">Menu</span>
                    <Icon
                        icon="menu"
                        className="ds_site-header__control-icon"
                    />
                    <Icon
                        icon="close"
                        className="ds_site-header__control-icon ds_site-header__control-icon--active-icon"
                    />
                </label>
                { /* eslint-enable jsx-a11y/label-has-associated-control */ }
            </div>

            <input
                className="ds_site-navigation__toggle"
                id={menuToggleId}
                type="checkbox"
                aria-labelledby={menuId}
            />
            <nav
                id={menuId}
                className={classNames(
                    'ds_site-navigation',
                    'ds_site-navigation--mobile',
                    className,
                )}
                aria-label={ariaLabel}
                {...props}
            >
                <ul className="ds_site-navigation__list">
                    { menuItems.map((item, index) => {
                        const key = `${menuId}-${index}`;
                        return (
                            <li key={key} className="ds_site-navigation__item">
                                <Link baseClass="ds_site-navigation__link" {...item} />
                            </li>
                        );
                    }) }
                </ul>
            </nav>
        </>
    );
};

export default SiteNavigation;
