import React, { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import '../styles/globals.scss';

import classNames from '../lib/classNames';

import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata:Metadata = {
    title: {
        default: 'Social Security Scotland',
        template: '%s | Prototype Toolkit | Social Security Scotland',
    },
    themeColor: '#ffffff',
    icons: {
        icon: '/images/favicon.ico',
        apple: [
            {
                url: '/images/scotgov-apple-touch-icon-180x180.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                url: '/images/scotgov-apple-touch-icon-180x180.png',
                sizes: '167x167',
                type: 'image/png',
            },
            {
                url: '/images/scotgov-apple-touch-icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                url: '/images/scotgov-apple-touch-icon.png',
                type: 'image/png',
            },
        ],
    },
};

/**
 * The main app
 *
 * @param {Object} props - Properties for the page
 * @returns {JSX.Element} - The page
 */
const Layout:React.FC<PropsWithChildren> = function Layout({
    children,
}) {
    return (
        <html lang="en-GB">
            <body>
                <div
                    className={classNames(
                        'ds_page',
                    )}
                >
                    <div className="ds_page_top">
                        <SiteHeader
                            menuItems={[
                                {
                                    text: 'Digital Scotland Design System',
                                    href: 'https://designsystem.gov.scot',
                                    target: '_blank',
                                },
                            ]}
                        />
                    </div>
                    <div className="ds_page_middle">
                        <main id="main-content">
                            { children }
                        </main>
                    </div>
                    <div className="ds_page_botom">
                        <SiteFooter
                            links={[
                                {
                                    text: 'Accessibility',
                                    href: 'https://www.mygov.scot/accessibility/',
                                    target: '_blank',
                                },
                                {
                                    text: 'Contact Us',
                                    href: 'https://www.mygov.scot/contact-social-security-scotland/',
                                    target: '_blank',
                                },
                                {
                                    text: 'Privacy',
                                    href: 'https://www.mygov.scot/social-security-data/',
                                    target: '_blank',
                                },
                                {
                                    text: 'Social Security Corporate Site',
                                    href: 'https://www.socialsecurity.gov.scot/',
                                    target: '_blank',
                                },
                                {
                                    text: 'mygov.scot',
                                    href: 'http://www.mygov.scot/',
                                    target: '_blank',
                                },
                                {
                                    text: 'The Scottish government',
                                    href: 'https://gov.scot/',
                                    target: '_blank',
                                },
                            ]}
                            copyright={{
                                content: 'mygov.scot is the place for people in Scotland to access public services that are easy to find and simple to use.',
                            }}
                        />
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Layout;
