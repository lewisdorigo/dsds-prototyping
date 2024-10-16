'use client';

import React, { useRef, useEffect } from 'react';
import CookieNotification from '@scottish-government/design-system/src/components/cookie-notification/cookie-notification';

import classNames from '@/lib/classNames';

import { NotificationBanner } from '@dsds-react/components/NotificationBanner';
import { Button } from '@dsds-react/components/Button';
import { Wrapper } from '@dsds-react/components/Wrapper';

import type { WrapperTag } from 'dsds-react/dist/components/WrapperTag/WrapperTag.type';
import {
    Style as ButtonStyle,
    Size as ButtonSize,
} from 'dsds-react/dist/components/Button/Button.type';

/**
 * @param {WrapperTag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CookieBanner:React.FC<WrapperTag> = function CookieBanner({
    children,
    className,
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new CookieNotification(ref.current).init();
        }
    }, [ref]);

    return (
        <>
            <div
                className={classNames(
                    'ds_notification',
                    'ds_notification--large',
                    'ds_notification--cookie',
                    'js-initial-cookie-content',
                    className,
                )}
                data-module="ds-cookie-notification"
                ref={ref}
            >
                <Wrapper>
                    <div className="ds_notification__content">
                        <div className="ds_notification__text">
                            <h2 className="visually-hidden">Information</h2>
                            { children }
                        </div>

                        <div className="ds_notification__actions">
                            <Button
                                size={ButtonSize.Small}
                                className="js-accept-all-cookies"
                            >
                                Accept all cookies
                            </Button>
                            <Button
                                className="js-accept-essential-cookies"
                                size={ButtonSize.Small}
                                style={ButtonStyle.Secondary}
                            >
                                Use essential cookies only
                            </Button>
                            <a href="/cookies/">Set cookie preferences</a>
                        </div>
                    </div>
                </Wrapper>
            </div>

            <NotificationBanner
                id="cookie-confirm"
                className={classNames(
                    'ds_notification--cookie-success',
                    'js-confirm-cookie-content',
                    'fully-hidden',
                    className,
                )}
                data-module="ds-cookie-notification"
            >
                <p>
                    Your cookie preferences have been saved. You can
                    {' '}
                    <a href="/cookies/">change your cookie settings</a>
                    {' '}
                    at any time.
                </p>
            </NotificationBanner>
        </>

    );
};

export default CookieBanner;
