import React from 'react';

import { ComponentHelper } from '@dsds-react/components/ComponentHelper/ComponentHelper';
import WrapperTag from '@dsds-react/components/WrapperTag';

import type { Grid as GridProps } from './Grid.type';

import classNames from '../../lib/classNames';

/**
 * @param {GridProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Grid:React.FC<Omit<GridProps, 'type'>> = function Grid({
    id,
    className,
    tag = 'div',
    items = [],
    columns = 4,
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
            id={id}
            tag={tag}
            className={classNames(
                'sss_grid',
                `sss_grid--${columns}`,
                className,
            )}
        >
            { items.map((item, index) => {
                const key = `${id}-grid-${index}`;

                return (
                    <WrapperTag
                        key={key}
                        tag={tag === 'ol' || tag === 'ul' ? 'li' : 'div'}
                        className={classNames(
                            'sss_grid__item',
                            ...widthClasses[columns],
                        )}
                    >
                        <ComponentHelper component={item} />
                    </WrapperTag>
                );
            })}
        </WrapperTag>
    );
};

export default Grid;
