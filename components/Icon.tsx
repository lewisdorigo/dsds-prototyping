import React from 'react';
import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Icon: React.FC<WebFrontEnd.Icon> = function Icon({
    icon,
    size,
    title = '',
    accessible = false,
    className,
    ...props
}) {
    return (
        <svg
            className={classNames(
                'ds_icon',
                `ds_icon--${icon}`,
                size ? `ds_icon--${size}` : '',
                className || '',
            )}
            {...props}
            aria-label={title}
            aria-hidden={!accessible}
            role="img"
        >
            <use xlinkHref={`/pattern-library/images/icons/icons.stack.svg#${icon}`} />
        </svg>
    );
};

export default Icon;
