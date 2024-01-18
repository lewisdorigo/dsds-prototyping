import React, { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';

import '@/styles/globals.scss';

import classNames from '@/lib/classNames';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PhaseBanner from '@/components/PhaseBanner';
import ArticleAside from '@/components/ArticleAside';
import BackToTop from '@/components/BackToTop';
import Link from '@/components/Link';

export const viewport:Viewport = {
    themeColor: '#ffffff',
    colorScheme: 'light',
};

export const metadata:Metadata = {
    title: {
        default: 'Social Security Scotland',
        template: '%s | Prototype Toolkit | Social Security Scotland',
    },
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
                        <PhaseBanner phase="alpha">
                            This is a new service.
                        </PhaseBanner>
                    </div>
                    <div className="ds_page_middle">
                        <main id="main-content">
                            { children }
                            <BackToTop />
                        </main>
                    </div>
                    <div className="ds_page_bottom">
                        <ArticleAside>
                            <h2 className="delta">Service feedback</h2>
                            <p>
                                <Link href="#page-top">Report a problem</Link>
                                {' '}
                                with this online form.
                            </p>
                        </ArticleAside>
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
