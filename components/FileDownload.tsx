import React from 'react';

import Metadata from './Metadata';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.FileDownload} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FileDownload:React.FC<ScotGov.Component.FileDownload> = function FileDownload({
    link = '#',
    highlight = false,
    title,
    type = 'generic',
    image: rawImage,
    metadata,
    className,
    id = 'file-download',
    children,
    ...props
}) {
    const image = rawImage || `/images/documents/${type}.svg`;

    return (
        <div
            className={classNames(
                'ds_file-download',
                highlight ? 'ds_file-download--highlighted' : '',
                className,
            )}
            id={id}
            {...props}
        >
            <div className="ds_file-download__thumbnail">
                <a
                    className="ds_file-download__thumbnail-link"
                    aria-hidden="true"
                    tabIndex={-1}
                    href={link}
                >
                    <img
                        className="ds_file-download__thumbnail-image"
                        src={image}
                        alt="Document cover"
                    />
                </a>
            </div>

            <div className="ds_file-download__content">
                <a
                    href={link}
                    className="ds_file-download__title"
                    aria-describedby={metadata ? `${id}-details` : ''}
                >
                    { title }
                </a>

                { children }

                { metadata && (
                    <div id={`${id}-details`} className="ds_file-download__details">
                        <Metadata
                            inline
                            items={metadata.map((item) => ({
                                ...item,
                                hideName: true,
                            }))}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileDownload;
