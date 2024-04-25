import React from 'react';

import classNames from '@/lib/classNames';

import WrapperTag from './WrapperTag';
import { CategoryItem } from './CategoryList';
import Image from './Image';

/**
 * @param {ScotGov.Component.CategoryItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Card:React.FC<ScotGov.Component.Card> = function Card({
    tag = 'div',
    title,
    text,
    link,
    className,
    image,
    headingLevel = 'h2',
    ...props
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_card',
                link ? 'ds_card--has-hover' : '',
                className,
            )}
            {...props}
        >
            { image && (
                <div className="ds_card__media">
                    <Image ratio="219" alt="" {...image} />
                </div>
            )}
            <CategoryItem
                tag="article"
                headingLevel={headingLevel}
                title={title}
                link={link}
                text={text}
            />
        </WrapperTag>
    );
};

export default Card;
