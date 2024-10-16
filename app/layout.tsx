import React, { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import dynamic from 'next/dynamic';

import '@/styles/globals.scss';

import type { WrapperTag } from 'dsds-react/dist/components/WrapperTag/WrapperTag.type';

import { Page as PageLayout } from '@dsds-react/layout/Page';
import { SiteHeader } from '@dsds-react/components/SiteHeader';
import { SiteFooter } from '@dsds-react/components/SiteFooter';

const CookieBanner = dynamic<WrapperTag>(
    () => import('@/components/CookieBanner'),
    { ssr: false },
);

export const viewport:Viewport = {
    themeColor: '#0065bd',
    colorScheme: 'light',
};

export const metadata:Metadata = {
    metadataBase: (
        process.env.BASE_URL
            ? new URL(process.env.BASE_URL)
            : undefined
    ),
    title: {
        default: 'Social Security Scotland',
        template: '%s — Prototype Toolkit — Social Security Scotland',
    },
    openGraph: {
        title: 'Prototype Toolkit',
        description: '',
        siteName: 'Prototype Toolkit',
        locale: 'en_GB',
        type: 'website',
    },
    icons: {
        icon: [
            {
                url: '/images/favicon.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/images/favicon@2x.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/images/favicon@3x.png',
                sizes: '48x48',
                type: 'image/png',
            },
            {
                url: '/images/favicon.ico',
                sizes: '16x16 32x32 48x48',
                type: 'image/x-icon',
            },
        ],
        apple: [
            {
                url: '/images/touch-icon/ipad@3x.png',
                sizes: '228x228',
                type: 'image/png',
            },
            {
                url: '/images/touch-icon/iphone@3x.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                url: '/images/touch-icon/ipad@2x.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                url: '/images/touch-icon/iphone@2x.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                url: '/images/touch-icon/ipad.png',
                sizes: '76x76',
                type: 'image/png',
            },
            {
                url: '/images/touch-icon/iphone.png',
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
    const cookieStore = cookies();
    const seenCookieNotice = cookieStore.get('cookie-notification-acknowledged');

    return (
        <html lang="en-GB">
            <body>
                <PageLayout
                    top={(
                        <>
                            { !seenCookieNotice && (
                                <CookieBanner>
                                    <p>
                                        We use
                                        {' '}
                                        <a href="/cookies/">cookies</a>
                                        {' '}
                                        to collect anonymous data to help us improve your site
                                        browsing experience.
                                    </p>
                                    <p>
                                        Click &apos;Accept all cookies&apos; to agree to all cookies
                                        that collect anonymous data. To only allow the cookies that
                                        make the site work, click &apos;Use essential cookies
                                        only.&apos; Visit &apos;Set cookie preferences&apos; to
                                        control specific cookies.
                                    </p>
                                </CookieBanner>
                            )}
                            <SiteHeader
                                branding={{
                                    siteName: 'Social Security Scotland',
                                    title: 'Prototype Toolkit',
                                    logo: '/images/logo.svg',
                                    smallLogo: '/images/logo-small.svg',
                                }}
                                menuItems={[
                                    {
                                        content: 'Test Page',
                                        href: '/test',
                                    },
                                    {
                                        content: 'About You',
                                        href: '/about-you/details',
                                    },
                                    {
                                        content: 'Help',
                                        href: '/help',
                                    },
                                    {
                                        content: 'Summary List',
                                        href: '/summary-list',
                                    },
                                    {
                                        content: 'Task List',
                                        href: '/task-list',
                                    },
                                    {
                                        content: 'Patterns',
                                        href: '/patterns',
                                    },
                                    {
                                        content: 'Digital Scotland Design System',
                                        href: 'https://designsystem.gov.scot',
                                        target: '_blank',
                                    },
                                ]}
                                phase={{
                                    phase: 'alpha',
                                    text: 'This is a new service.',
                                }}
                            />
                        </>
                    )}
                    bottom={(
                        <SiteFooter
                            menuItems={[
                                {
                                    content: 'Accessibility',
                                    href: 'https://www.mygov.scot/accessibility/',
                                    target: '_blank',
                                },
                                {
                                    content: 'Contact Us',
                                    href: 'https://www.mygov.scot/contact-social-security-scotland/',
                                    target: '_blank',
                                },
                                {
                                    content: 'Privacy',
                                    href: 'https://www.mygov.scot/social-security-data/',
                                    target: '_blank',
                                },
                                {
                                    content: 'Social Security Corporate Site',
                                    href: 'https://www.socialsecurity.gov.scot/',
                                    target: '_blank',
                                },
                                {
                                    content: 'mygov.scot',
                                    href: 'http://www.mygov.scot/',
                                    target: '_blank',
                                },
                                {
                                    content: 'The Scottish government',
                                    href: 'https://gov.scot/',
                                    target: '_blank',
                                },
                            ]}
                            copyright={{
                                content: 'mygov.scot is the place for people in Scotland to access public services that are easy to find and simple to use.',
                            }}
                        />
                    )}
                >
                    { children }
                </PageLayout>
            </body>
        </html>
    );
};

export default Layout;
