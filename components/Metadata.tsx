import React from 'react';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const MetadataItem:React.FC<ScotGov.Component.Metadata.Item> = function MetadataItem({
    name,
    value,
    hideName,
    isLabel,
}) {
    return (
        <div className="ds_metadata__item">
            <dt className={classNames('ds_metadata__key', hideName ? 'visually-hidden' : '')}>
                { name }
            </dt>
            {' '}
            <dd className={classNames('ds_metadata__value', isLabel ? 'ds_content-label' : '')}>
                { value }
                {' '}
            </dd>
        </div>
    );
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Metadata:React.FC<ScotGov.Component.Metadata> = function Metadata({
    items,
    className,
    inline = false,
    ...props
}) {
    return (
        <dl
            className={classNames(
                'ds_metadata',
                inline ? 'ds_metadata--inline' : '',
                className,
            )}
            {...props}
        >
            { items && items.map((item, index) => {
                const itemKey = `meta-data-${index}`;
                return <MetadataItem key={itemKey} {...item} />;
            })}
        </dl>
    );
};

export default Metadata;
