'use client';

import React, { useEffect, useRef } from 'react';
import Notification from '@scottish-government/design-system/src/components/notification-banner/notification-banner';
import Wrapper from './Wrapper';
import WrapperTag from './WrapperTag';
import classNames from '../lib/classNames';
import Icon from './Icon';

/**
 * @param {ScotGov.Component.NotificationBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const NotificationBanner:React.FC<
    ScotGov.Component.NotificationBanner
> = function NotificationBanner({
    className,
    icon: hasIcon,
    hasClose = true,
    variant,
    children,
    'aria-label': ariaLabel = 'Notification Banner',
    ...props
}) {
    const notification = useRef(null);
    let icon;

    if (typeof hasIcon === 'string') {
        icon = hasIcon;
    } if (hasIcon) {
        icon = 'priority_high';
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            new Notification(notification.current).init();
        }
    }, [notification]);

    return (
        <WrapperTag
            className={classNames(
                'ds_notification',
                'ds_reversed',
                variant ? `ds_notification--${variant}` : undefined,
                className,
            )}
            data-module="ds-notification"
            aria-label={ariaLabel}
            ref={notification}
            {...props}
        >
            <Wrapper>
                <div className={classNames(
                    'ds_notification__content',
                    hasClose ? 'ds_notification__content--has-close' : undefined,
                )}
                >
                    <h2 className="visually-hidden">Information</h2>
                    {icon && (
                        <span
                            className="ds_notification__icon  ds_notification__icon--inverse  ds_notification__icon--colour"
                            aria-hidden="true"
                        >
                            <Icon icon={icon} size="fill" accessible={false} />
                        </span>
                    )}
                    <div className="ds_notification__text">
                        { children }
                    </div>
                    { hasClose && (
                        <button
                            className={classNames(
                                'ds_notification__close',
                                'js-close-notification',
                            )}
                            type="button"
                            ref={notification}
                        >
                            <span className="visually-hidden">Close this notification</span>
                            <Icon icon="close" size="fill" accessible={false} />
                        </button>
                    )}
                </div>
            </Wrapper>
        </WrapperTag>
    );
};

export default NotificationBanner;
