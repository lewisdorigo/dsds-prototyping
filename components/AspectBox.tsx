import React, { isValidElement } from 'react';

import classNames from '@/lib/classNames';

import WrapperTag from './WrapperTag';

/**
 * @param {ScotGov.Component.AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const AspectBox:React.FC<ScotGov.Component.AspectBox> = function AspectBox({
    ratio,
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_aspect-box',
                ratio ? `ds_aspect-box--${ratio}` : undefined,
                className,
            )}
            {...props}
        >
            { React.Children.map<React.ReactNode, React.ReactNode>(
                children,
                (item) => (
                    item && typeof item === 'object' && isValidElement(item)
                        ? React.cloneElement(item as React.ReactElement, {
                            className: classNames(
                                'ds_aspect-box__inner',
                                item.props.className ? item.props.className : null,
                            ),
                        })
                        : item
                ),
            ) }
        </WrapperTag>
    );
};

export default AspectBox;
