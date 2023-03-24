import React from 'react';
import {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Document:React.FC = function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content="#ffffff" />

                <link
                    rel="shortcut icon"
                    sizes="16x16 32x32 48x48"
                    href="/images/favicon.ico"
                    type="image/x-icon"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/scotgov-apple-touch-icon-180x180.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="167x167"
                    href="/images/scotgov-apple-touch-icon-167x167.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/images/scotgov-apple-touch-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    href="/images/scotgov-apple-touch-icon.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
