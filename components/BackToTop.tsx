'use client';

import React, { useEffect, useRef } from 'react';
import ToTop from '@scottish-government/design-system/src/components/back-to-top/back-to-top';

import Icon from './Icon';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.BackToTop} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const BackToTop:React.FC<ScotGov.Component.BackToTop> = function BackToTop({
    label = 'Back to top',
    link = '#page-top',
    className,
    ...props
}) {
    const toTop = useRef(null);

    useEffect(() => {
        if (toTop.current) {
            new ToTop(
                toTop.current,
                window,
            ).init();
        }
    }, [toTop]);

    return (
        <div
            className={classNames(
                'ds_back-to-top',
                className,
            )}
            data-module="ds-back-to-top"
            ref={toTop}
            {...props}
        >
            <a
                href={link}
                className="ds_back-to-top__button"
            >
                { label }
                <Icon
                    icon="arrow_upward"
                    className="ds_back-to-top__icon"
                />
            </a>
        </div>
    );
};

export default BackToTop;
