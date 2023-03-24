import React from 'react';

import classNames from '../lib/classNames';

/**
 * DSDS `Wrapper` component
 *
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Wrapper: React.FC<WebFrontEnd.Wrapper> = function Wrapper({
    children,
    className,
    ...props
}) {
    return (
        <div
            className={classNames(
                'ds_wrapper',
                className,
            )}
            {...props}
        >
            { children }
        </div>
    );
};

export default Wrapper;
