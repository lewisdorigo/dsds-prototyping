import React from 'react';

import classNames from '../lib/classNames';

/**
 * @param {React.AllHTMLAttributes<HTMLLabelElement>} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Label:React.FC<React.AllHTMLAttributes<HTMLLabelElement>> = function Label({
    className,
    children,
    htmlFor,
    ...props
}) {
    return (
        <label
            className={classNames(
                'ds_label',
                className,
            )}
            htmlFor={htmlFor}
            {...props}
        >
            { children }
        </label>
    );
};

export default Label;
