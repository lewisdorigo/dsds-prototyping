import React, { useState } from 'react';

import classNames from '../lib/classNames';

let metaDataCounter = 0;

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const MetadataItem: React.FC<WebFrontEnd.Metadata.Item> = function MetadataItem({
    name,
    value,
    hideName,
    isLabel,
}) {
    return (
        <div className="ds_metadata__item">
            <dt className={classNames('ds_metadata__key', hideName ? 'visually-hidden' : '')}>
                {name}
            </dt>
            {' '}
            <dd className={classNames('ds_metadata__value', isLabel ? 'ds_content-label' : '')}>
                { value }
            </dd>
        </div>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Metadata: React.FC<WebFrontEnd.Metadata> = function Metadata({
    items,
    className,
    ...props
}) {
    const [count] = useState(metaDataCounter += 1);

    return (
        <dl className={`ds_metadata${className ? ` ${className}` : ''}`} {...props}>
            { items && items.map((item, index) => {
                const itemKey = `meta-data-${count}-${index}`;
                return <MetadataItem key={itemKey} {...item} />;
            })}
        </dl>
    );
};

export default Metadata;
