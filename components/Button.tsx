'use client';

import React from 'react';

import Icon from './Icon';
import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Button: React.FC<React.HTMLProps<HTMLDivElement>> = function Button({
    href,
    target,
    children,
    type,
    variants = [],
    icon,
    iconSide = 'right',
    className,
    onClick,
    ...props
}) {

    let btnVariants = typeof variants === 'string' ? variants.split(' ') : variants;
    btnVariants = btnVariants?.map((variant) => ` ds_button--${variant}`) || [];

    const buttonClass = classNames(
        'ds_button',
        className,
        icon ? 'ds_button--has-icon' : '',
        icon && iconSide ? `ds_button--has-icon--${iconSide}` : '',
        ...btnVariants,
    );

    const buttonContent = (
        <>
            { icon && iconSide === 'left' && <Icon icon={icon} /> }
            { children }
            { icon && iconSide === 'right' && <Icon icon={icon} /> }
        </>
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
                {...props as Partial<WebFrontEnd.Button.Anchor>}
            >
                {buttonContent}
            </a>
        );
    }

    return (
        <button
            className={buttonClass}
            type={type === 'submit' ? 'submit' : 'button'}
            onClick={clickHandler}
            {...props as Partial<WebFrontEnd.Button.Button>}
        >
            {buttonContent}
        </button>
    );
};

export default Button;
