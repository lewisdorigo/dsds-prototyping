import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorSummary:React.FC<ScotGov.Component.ErrorSummary> = function ErrorSummary({
    errors,
    id = 'error-summary',
    title = 'There is a problem',
    className,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_error-summary',
                className,
            )}
            {...props}
            aria-labelledby={`${id}-title`}
            id={id}
            role="alert"
        >
            <h2
                className="ds_error-summary__title"
            >
                {title}
            </h2>
            <ul className="ds_error-summary__list">
                {errors.map(({ field, href, message }, index) => {
                    const key = `${id}-${field}-${index}`;
                    return (
                        <li key={key}>
                            {(
                                field || href
                                    ? (
                                        <a href={href || `#${field}`}>
                                            {message}
                                        </a>
                                    )
                                    : message
                            )}
                        </li>
                    );
                })}
            </ul>
        </WrapperTag>
    );
};

export default ErrorSummary;
