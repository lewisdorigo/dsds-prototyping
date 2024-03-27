import React from 'react';

import WrapperTag from './WrapperTag';

import autop from '../lib/autop';
import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.ErrorMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorMessage:React.FC<ScotGov.Component.ErrorMessage> = function ErrorMessage({
    children,
    className,
    text,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_question__error-message',
                className,
            )}
            {...props}
        >
            { text ? autop(text) : children }
        </WrapperTag>
    );
};

export default ErrorMessage;
