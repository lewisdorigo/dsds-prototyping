'use client';

import React, { useEffect, useRef } from 'react';
import DSDSTabs from '@scottish-government/design-system/src/components/tabs/tabs';

import classNames from '@/lib/classNames';
import autop from '@/lib/autop';

/**
 * @param {ScotGov.Component.Tabs} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Tabs:React.FC<ScotGov.Component.Tabs> = function Tabs({
    items,
    bordered = true,
    id: rawId,
    ...props
}) {
    const ref = useRef(null);
    const id = rawId || 'tabs';

    useEffect(() => {
        if (ref.current) {
            new DSDSTabs(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className={classNames(
                'ds_tabs',
            )}
            id={id}
            {...props}
            ref={ref}
        >
            <nav
                className="ds_tabs__navigation"
                aria-labelledby={`${id}-title`}
            >
                <h2
                    className="ds_tabs__title"
                    id={`${id}-title`}
                >
                    Contents
                </h2>
                <ul
                    className="ds_tabs__list"
                    id={`${id}-tablist`}
                >
                    { items.map(({ id: itemId, title }) => (
                        <li className="ds_tabs__tab" key={`${id}-tablist-${itemId}`}>
                            <a
                                className="ds_tabs__tab-link"
                                href={`#${id}-${itemId}`}
                            >
                                { title }
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            { items.map(({ id: itemId, text }) => (
                <div
                    className={classNames(
                        'ds_tabs__content',
                        bordered ? 'ds_tabs__content--bordered' : '',
                    )}
                    id={`${id}-${itemId}`}
                    key={`${id}-${itemId}`}
                >
                    { typeof text === 'string' ? autop(text) : text }
                </div>
            ))}
        </div>
    );
};

export default Tabs;
