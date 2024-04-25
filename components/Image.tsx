import React from 'react';

import autop from '@/lib/autop';

import AspectBox from './AspectBox';

/**
 * @param {ScotGov.Component.Image} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Image:React.FC<ScotGov.Component.Image> = function Image({
    caption,
    ratio,
    ...props
}) {
    let image = (
        <img {...props} />
    );

    if (ratio) {
        image = (
            <AspectBox ratio={typeof ratio !== 'boolean' ? ratio : undefined}>
                { image }
            </AspectBox>
        );
    }

    if (!caption) {
        return image;
    }

    return (
        <figure className="sss_figure">
            { image }
            <figcaption className="sss_figure__caption">
                { autop(caption) }
            </figcaption>
        </figure>
    );
};

export default Image;
