import React from 'react';

import WrapperTag from './WrapperTag';

import autop from '../lib/autop';
import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const HintText:React.FC<ScotGov.Component.HintText> = function HintText({
    children,
    className,
    text,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_hint-text',
                className,
            )}
            {...props}
        >
            { text ? autop(text) : children }
        </WrapperTag>
    );
};

export default HintText;
