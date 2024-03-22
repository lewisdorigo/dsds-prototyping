'use client';

import React from 'react';
import classNames from '../lib/classNames';
import Wrapper from './Wrapper';
import WrapperTag from './WrapperTag';
import Tag from './Tag';

/**
 * @param {ScotGov.Component.PhaseBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PhaseBanner:React.FC<ScotGov.Component.PhaseBanner> = function PhaseBanner({
    phase = 'alpha',
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_phase-banner',
                className,
            )}
            {...props}
        >
            <Wrapper>
                <div className="ds_phase-banner__content">
                    <Tag className="ds_phase-banner__tag" tag="strong">
                        { phase }
                    </Tag>
                    <span className="ds_phase-banner__text">
                        { children }
                    </span>
                </div>
            </Wrapper>
        </WrapperTag>
    );
};

export default PhaseBanner;
