import React from 'react';

import classNames from '../lib/classNames';
import WrapperTag from './WrapperTag';

/**
 * @param {React.AllHTMLAttributes<HTMLLabelElement>} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Grid:React.FC<ScotGov.Component.Grid> = function Grid({
    className,
    tag = 'div',
    children,
    columns = 4,
    ...props
}) {
    const widthClasses = {
        4: [
            'sss_w-1-4-large-up',
            'sss_w-1-3-medium',
        ],
        3: [
            'sss_w-1-3-medium-up',
        ],
        2: [
            'sss_w-1-2-medium-up',
        ],
        1: [],
    };

    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'sss_grid',
                `sss_grid--${columns}`,
                className,
            )}
            {...props}
        >
            { React.Children.map(children, (child) => (
                <WrapperTag
                    tag={tag === 'ol' || tag === 'ul' ? 'li' : 'div'}
                    className={classNames(
                        'sss_grid__item',
                        ...widthClasses[columns],
                    )}
                >
                    {child}
                </WrapperTag>
            ))}
        </WrapperTag>
    );
};

export default Grid;
