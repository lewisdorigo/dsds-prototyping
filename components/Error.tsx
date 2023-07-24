import React from 'react';

import WrapperTag from './WrapperTag';

import autop from '../lib/autop';
import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Error: React.FC<React.PropsWithChildren> = function Error({
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
            dangerouslySetInnerHTML={{ __html: autop(text) }}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

export default Error;
