import React from 'react';

import WrapperTag from './WrapperTag';
import classNames from '../lib/classNames';

/**
 * DSDS `Wrapper` component
 *
 * @param {ScotGov.Component.Wrapper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Wrapper:React.FC<ScotGov.Component.Wrapper> = function Wrapper({
    tag = 'div',
    children,
    className,
    hasBackground = false,
    ...props
}) {
    if (hasBackground) {
        const backgroundColor = typeof hasBackground === 'string' ? hasBackground : 'grey';
        return (
            <div
                className={classNames(
                    'sss_section',
                    'sss_section--has-background',
                    `sss_section--${backgroundColor}`,
                )}
            >
                <WrapperTag
                    tag={tag}
                    className={classNames(
                        'ds_wrapper',
                        className,
                    )}
                    {...props}
                >
                    { children }
                </WrapperTag>
            </div>
        );
    }

    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_wrapper',
                className,
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

export default Wrapper;
