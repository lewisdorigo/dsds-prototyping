import React from 'react';

import classNames from '@/lib/classNames';
import autop from '@/lib/autop';

import Icon from './Icon';
import WrapperTag from './WrapperTag';

/**
 * @param {ScotGov.Component.Details} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ConfirmationMessage:React.FC<ScotGov.Component.ConfirmationMessage> = (
    function ConfirmationMessage({
        title,
        className,
        headingLevel = 'h2',
        content,
        ...props
    }) {
        return (
            <div
                className={classNames(
                    'ds_confirmation-message',
                    className,
                )}
                aria-live="polite"
                {...props}
            >
                <Icon
                    className="ds_confirmation-message__icon"
                    icon="check_circle"
                    size={24}
                />
                <WrapperTag
                    tag={headingLevel}
                    className="ds_confirmation-message__title"
                >
                    { title }
                </WrapperTag>
                { content && (
                    <div className="ds_confirmation-message__body">
                        { autop(content) }
                    </div>
                )}
            </div>
        );
    }
);

export default ConfirmationMessage;
