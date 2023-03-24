import '../styles/globals.scss';

import React from 'react';
import type { AppProps } from 'next/app';

import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHeader from '../components/PageHeader';
import Wrapper from '../components/Wrapper';

/**
 * The main app
 *
 * @param {Object} props - Properties for the page
 * @returns {JSX.Element} - The page
 */
const App:React.FC<AppProps> = function App({
    Component,
    pageProps: {
        title,
        navigation,
        ...props
    },
}) {
    return (
        <div className="ds_page">
            <div className="ds_page_top">
                <SiteHeader menuItems={navigation} />
            </div>
            <div className="ds_page_middle">
                <main id="main-content">
                    <Wrapper>
                        <PageHeader {...title} />
                    </Wrapper>

                    <Component title={title} {...props} />
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
    );
};

export default App;
