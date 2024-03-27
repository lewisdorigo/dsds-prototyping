import React from 'react';
import Image from 'next/image';
import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.FeatureHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FeatureHeader:React.FC<ScotGov.Component.FeatureHeader> = function FeatureHead({
    title,
    content,
    imageData,
    className,
    'aria-label': ariaLabel = 'Feature Header',
    background,
    wideText,
    ...props
}) {
    return (
        <header
            className={classNames(
                'ds_feature-header',
                background ? 'ds_feature-header--background' : null,
                wideText ? 'ds_feature-header--wide' : null,
                className,
            )}
            aria-label={ariaLabel}
            {...props}
        >
            <div className="ds_feature-header__primary">
                <h1 className="ds_feature-header__title">{title}</h1>
                {content && (
                    <p>{content}</p>
                )}
            </div>
            <div className="ds_feature-header__secondary">
                { imageData
                    && (
                        <Image
                            className="ds_feature-header__image"
                            src={imageData.src}
                            alt={imageData.alt}
                            width={0}
                            height={0}
                        />
                    )}
            </div>
        </header>
    );
};

export default FeatureHeader;
