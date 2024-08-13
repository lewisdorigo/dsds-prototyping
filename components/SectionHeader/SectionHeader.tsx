import React from 'react';

import classNames from '../../lib/classNames';

import type { SectionHeader as SectionHeaderProps } from './SectionHeader.type';

/**
 * @param {SectionHeaderProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SectionHeader:React.FC<Omit<SectionHeaderProps, 'type'>> = function SectionHeader({
    link,
    label = 'Your application',
    className,
    // headingLevel, // eslint-disable-line @typescript-eslint/no-unused-vars
}) {
    return (
        <dl
            className={classNames(
                'sss_section-header',
                className,
            )}
        >
            <dt className="sss_section-header__intro">
                {(
                    link
                        ? 'Return to'
                        : 'Part of'
                )}
            </dt>
            <dd className="sss_section-header__title">
                { link && typeof link === 'string' ? (
                    <a href={link}>
                        {label}
                    </a>
                ) : label }
            </dd>
        </dl>
    );
};

export default SectionHeader;
