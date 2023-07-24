import React from 'react';

import WrapperTag from './WrapperTag';
import classNames from '../lib/classNames';

/**
 * DSDS `Wrapper` component
 *
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Wrapper: React.FC<WebFrontEnd.Wrapper> = function Wrapper({
    tag = 'div',
    children,
    className,
    hasBackground = false,
    ...props
}) {
    if (hasBackground) {
        return (
            <div className="ds_cb ds_cb--cards ds_cb--bg-grey ds_cb--fullwidth">
                <WrapperTag
                    tag={tag}
                    className={classNames(
                        'ds_wrapper',
                        className,
                    )}
                    {...props}
                >
                    <div className="ds_cb__inner">
                        { children }
                    </div>
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
