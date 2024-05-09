import React from 'react';

import autop from '@/lib/autop';
import classNames from '@/lib/classNames';

import WrapperTag from './WrapperTag';

/**
 * @param {ScotGov.Component.CategoryItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const CategoryItem:React.FC<ScotGov.Component.CategoryItem> = function CategoryItem({
    tag = 'div',
    title,
    text,
    link,
    className,
    headingLevel = 'h2',
    ...props
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_category-item',
                className,
            )}
            {...props}
        >
            <WrapperTag
                tag={headingLevel}
                className="ds_category-item__title"
            >
                <a href={link} className="ds_category-item__link">
                    { title }
                </a>
            </WrapperTag>
            <div className="ds_category-item__summary">{ autop(text) }</div>
        </WrapperTag>
    );
};

/**
 * @param {ScotGov.Component.CategoryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CategoryList:React.FC<ScotGov.Component.CategoryList> = function CategoryList({
    tag = 'ul',
    layout = 'list',
    spacing,
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_category-list',
                layout !== 'list' ? `ds_category-list--${layout}` : '',
                spacing ? `ds_category-list--${spacing}` : '',
                className,
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

export default CategoryList;
