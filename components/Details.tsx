import React from 'react';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Details} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Details:React.FC<ScotGov.Component.Details> = function Details({
    label,
    className,
    children,
    ...props
}) {
    return (
        <details
            className={classNames(
                'ds_details',
                className,
            )}
            {...props}
        >
            <summary className="ds_details__summary">
                { label }
            </summary>

            <div className="ds_details__text">
                { children }
            </div>
        </details>
    );
};

export default Details;
