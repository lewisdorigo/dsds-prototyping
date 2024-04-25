import React from 'react';

import autop from '@/lib/autop';

/**
 * @param {ScotGov.Component.Image} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Image:React.FC<ScotGov.Component.Image> = function Image({
    caption,
    ...props
}) {
    const image = (
        <img {...props} />
    );

    if (!caption) {
        return image;
    }

    return (
        <figure className="sss_figure">
            { image }
            <figcaption className="sss_figure__caption">{ autop(caption) }</figcaption>
        </figure>
    );
};

export default Image;
