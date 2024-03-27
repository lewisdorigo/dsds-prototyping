import React from 'react';
import Image from 'next/image';

import Wrapper from './Wrapper';
import SiteNavigation from './SiteNavigation';
import Link from './Link';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.SiteHeader.Branding} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteBranding:React.FC<ScotGov.Component.SiteHeader.Branding> = function SiteBranding({
    title,
}) {
    return (
        <div className="ds_site-branding">
            <Link
                className="ds_site-branding__logo ds_site-branding__link"
                href="/"
                aria-label="Return to home page"
            >
                <Image
                    className="ds_site-branding__logo-image"
                    src="/images/social-security-scotland-logo.svg"
                    alt="Social Security Scotland"
                    width={228}
                    height={79}
                />
            </Link>
            {title && (
                <div className="ds_site-branding__title">
                    {title}
                </div>
            )}
        </div>
    );
};

/**
 * @param {ScotGov.Component.SiteHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteHeader:React.FC<ScotGov.Component.SiteHeader> = function SiteHead({
    title,
    className,
    'aria-label': ariaLabel = 'Site Header',
    menuItems,
    ...props
}) {
    return (
        <header
            className={classNames(
                'ds_site-header',
                className,
            )}
            aria-label={ariaLabel}
            {...props}
        >
            <Wrapper>
                <div className="ds_site-header__content">
                    <SiteBranding title={title} />
                    { menuItems && <SiteNavigation menuItems={menuItems} /> }
                </div>
            </Wrapper>
        </header>
    );
};

export default SiteHeader;
