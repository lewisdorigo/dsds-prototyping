import React from 'react';

import Link from './Link';
import Wrapper from './Wrapper';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterLinks: React.FC<WebFrontEnd.SiteFooter.Links> = function SiteFooterLinks({
    links,
}) {
    return (
        <ul className="ds_site-footer__site-items">
            {
                links && links.map((link, index) => {
                    if (!link.href) { return []; }
                    const key = `site-foot-links-${index}`;

                    return (
                        <li className="ds_site-items__item" key={key}>
                            <Link {...link} tabText={false} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterCopyright: React.FC<
    WebFrontEnd.SiteFooter.Copyright
> = function SiteFooterCopyright({
    logo,
    link,
    content,
}) {
    let logoElement;

    if (logo && link) {
        logoElement = (
            <a className="copyrightText ds_site-footer-logo" href={link}>
                {logo}
            </a>
        );
    } else if (logo) {
        logoElement = (
            <span className="copyrightText ds_site-footer-logo">
                {logo}
            </span>
        );
    }

    return (
        <div
            className={classNames(
                'ds_site-footer__copyright',
                `ds_site-footer__copyright--${!logoElement ? 'no' : 'has'}-logo`,
            )}
        >
            { logoElement }
            { content }
        </div>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterOrg: React.FC<WebFrontEnd.SiteFooter.Organisation> = function SiteFooterOrg({
    logo,
    link,
}) {
    const logoElem = React.Children.map(logo, (item:React.ReactElement) => (
        React.cloneElement(item, {
            className: classNames(
                'ds_site-footer__org-logo',
                item.props.className ? item.props.className : null,
            ),
        })
    ));

    let logoElement;

    if (link) {
        logoElement = (
            <a className="ds_site-footer__org-link" href={link}>
                {logoElem}
            </a>
        );
    } else {
        logoElement = logoElem;
    }

    return (
        <div className="ds_site-footer__org">
            { logoElement }
        </div>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteFooter: React.FC<WebFrontEnd.SiteFooter> = function SiteFooter({
    links,
    copyright,
    org,
    className,
    'aria-label': ariaLabel = 'Site Footer',
    ...props
}) {
    return (
        <footer
            className={classNames(
                'ds_site-footer',
                className,
            )}
            aria-label={ariaLabel}
            {...props}
        >
            <Wrapper>
                <div className="ds_site-footer__content">
                    { links && links.length > 0 && <SiteFooterLinks links={links} /> }
                    { copyright && <SiteFooterCopyright {...copyright} /> }
                    { org && <SiteFooterOrg {...org} /> }
                </div>
            </Wrapper>
        </footer>
    );
};

export default SiteFooter;
