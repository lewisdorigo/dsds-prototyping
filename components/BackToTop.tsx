'use client';

import React, { useEffect, useRef } from 'react';
import ToTop from '@scottish-government/design-system/src/components/back-to-top/back-to-top';

import Icon from './Icon';

/**
 * @param {ScotGov.Component.SiteNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const BackToTop: React.FC = function BackToTop() {
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
            className="ds_back-to-top"
            data-module="ds-back-to-top"
            ref={toTop}
        >
            <a
                href="#page-top"
                className="ds_back-to-top__button"
            >
                Back to top
                <Icon
                    icon="arrow_upward"
                    className="ds_back-to-top__icon"
                />
            </a>
        </div>
    );
};

export default BackToTop;
