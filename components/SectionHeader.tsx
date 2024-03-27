import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {React.AllHTMLAttributes<HTMLDivElement>} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SectionHeader:React.FC<ScotGov.Component.SectionHeader> = function SectionHeader({
    link,
    title = 'Your application',
    className,
    ...props
}) {
    return (
        <WrapperTag
            tag="header"
            className={classNames(
                'sss_section-header',
                className,
            )}
            {...props}
        >
            <span className="sss_section-header__intro">
                { link ? 'Return to' : 'Part of' }
            </span>
            { link && typeof link === 'string' ? (
                <a
                    href={link}
                    className="sss_section-header__title sss_section-header__title--link"
                >
                    {title}
                </a>
            ) : (
                <strong className="sss_section-header__title">
                    {title}
                </strong>
            )}
        </WrapperTag>
    );
};

export default SectionHeader;
