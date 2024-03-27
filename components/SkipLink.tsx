import React from 'react';

/**
 * @param {ScotGov.Component.SkipLinks} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SkipLinks:React.FC<ScotGov.Component.SkipLinks> = function SkipLinks({
    id,
}) {
    const href = `#${id}`;
    return (
        <div className="ds_skip-links">
            <ul className="ds_skip-links__list">
                <li className="ds_skip-links__item">
                    <a className="ds_skip-links__link" href={href}>Skip to main content</a>
                </li>
            </ul>
        </div>
    );
};

export default SkipLinks;
