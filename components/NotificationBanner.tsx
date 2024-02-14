import React from 'react';
import Wrapper from './Wrapper';
import WrapperTag from './WrapperTag';
import classNames from '../lib/classNames';
import Icon from './Icon';

/**
 * @param {ScotGov.Component.NotificationBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const NotificationBanner: React.FC<
    ScotGov.Component.NotificationBanner
> = function NotificationBanner({
    caption,
    className,
    icon,
    hasClose,
    success,
    'aria-label': ariaLabel = 'Notification Banner',
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_notification',
                'ds_reversed',
                success ? 'ds_notification--success' : undefined,
                className,
            )}
            data-module="ds-notification"
            aria-label={ariaLabel}
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
                        <span className="ds_notification__icon  ds_notification__icon--inverse  ds_notification__icon--colour" aria-hidden="true">
                            <Icon icon="priority_high" size="fill" accessible={false} />
                        </span>
                    )}
                    <div className="ds_notification__text">
                        <p>
                            {caption.text}
                            {caption.link && (
                                <a target="_blank" rel="noreferrer noopener" href={caption.link}>
                                    {caption.linkText}
                                </a>
                            )}
                        </p>
                    </div>
                    { hasClose && (
                        <button
                            className={classNames(
                                'ds_notification__close',
                                'js-close-notification',
                            )}
                            type="button"
                            data-button="button-close-this-notification"
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
