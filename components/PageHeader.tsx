import React from 'react';

import Metadata from './Metadata';
import Heading from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.PageHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PageHeader:React.FC<ScotGov.Component.PageHeader> = function PageHead({
    caption,
    title,
    metadata,
    className,
    'aria-label': ariaLabel = 'Page Header',
    headingLevel: tag = 'h1',
    ...props
}) {
    return (
        <header
            className={classNames(
                'ds_page-header',
                className,
            )}
            aria-label={ariaLabel}
            {...props}
        >
            { caption && caption.trim() && (
                <span
                    className="ds_page-header__label ds_content-label"
                    dangerouslySetInnerHTML={{ __html: caption }}
                />
            )}
            <Heading
                tag={tag}
                className="ds_page-header__title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            { metadata && <Metadata items={metadata} /> }
        </header>
    );
};

export default PageHeader;
