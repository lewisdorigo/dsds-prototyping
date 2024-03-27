import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Warning:React.FC<ScotGov.Component.Warning> = function Warning({
    id = 'error-summary',
    title = 'Warning',
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_warning-text',
                className,
            )}
            {...props}
            aria-labelledby={`${id}-title`}
            id={id}
            role="alert"
        >
            <strong className="ds_warning-text__icon" aria-hidden="true" />
            <strong className="visually-hidden">{title}</strong>
            <div className="ds_warning-text__text">
                {children}
            </div>
        </WrapperTag>
    );
};

export default Warning;
