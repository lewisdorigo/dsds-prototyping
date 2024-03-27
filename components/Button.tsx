'use client';

import React from 'react';

import Icon from './Icon';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Button} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Button:React.FC<ScotGov.Component.Button> = function Button({
    href,
    target,
    children,
    variants = [],
    size = [],
    icon,
    type = 'button',
    iconSide = 'right',
    className,
    onClick,
    ...props
}) {
    let btnVariants = typeof variants === 'string' ? variants.split(' ') : variants;
    btnVariants = btnVariants?.map((variant) => `ds_button--${variant}`) || [];

    let btnSize = typeof size === 'string' ? size.split(' ') : size;
    btnSize = btnSize?.map((sizeOption) => `ds_button--${sizeOption}`) || [];

    const iconOnly = icon && iconSide === 'icon-only';

    const buttonClass = classNames(
        'ds_button',
        className,
        icon && !iconOnly ? 'ds_button--has-icon' : '',
        icon && iconSide && !iconOnly ? `ds_button--has-icon--${iconSide}` : '',
        ...btnVariants,
        ...btnSize,
    );

    const buttonContent = (
        !iconOnly
            ? (
                <>
                    { icon && iconSide === 'left' && <Icon icon={icon} /> }
                    { children }
                    { icon && iconSide === 'right' && <Icon icon={icon} /> }
                </>
            )
            : (
                <>
                    <Icon icon={icon} />
                    <span className="visually-hidden">{ children }</span>
                </>
            )
    );

    type ClickHandlerType = React.MouseEventHandler<HTMLButtonElement|HTMLAnchorElement>;
    type ClickEventType = (
        React.MouseEvent<HTMLButtonElement, MouseEvent>
        & React.MouseEvent<HTMLAnchorElement, MouseEvent>
    );

    const clickHandler:ClickHandlerType = (e:ClickEventType):void => {
        if (onClick) { onClick(e); }
    };

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={buttonClass}
                rel={target ? 'noopener noreferrer' : undefined}
                onClick={clickHandler}
                {...props as ScotGov.Component.Button.Anchor}
            >
                {buttonContent}
            </a>
        );
    }

    return (
        <button
            className={buttonClass}
            onClick={clickHandler}
            {...props as ScotGov.Component.Button.Button}
            type={type as ScotGov.Component.Button.Type}
        >
            {buttonContent}
        </button>
    );
};

export default Button;
