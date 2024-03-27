'use client';

import React, { useEffect, useRef, useState } from 'react';
import Accord from '@scottish-government/design-system/src/components/accordion/accordion';

import classNames from '../lib/classNames';

let accordionItemCounter = 0;

/**
 * @param {ScotGov.Component.Accordion} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AccordionItem:React.FC<ScotGov.Component.Accordion.Item> = function AccordionItem({
    title,
    children,
    open = false,
    id: rawId,
    ...props
}) {
    const [id] = useState<string>(rawId || `accordion-item-${accordionItemCounter += 1}`);
    return (
        <article
            className={classNames(
                'ds_accordion-item',
            )}
            id={id}
            {...props}
        >
            <input
                type="checkbox"
                className={classNames(
                    'visually-hidden',
                    'ds_accordion-item__control',
                )}
                defaultChecked={open}
                id={`${id}-control`}
                aria-labelledby={`${id}-heading`}
            />
            <header
                className={classNames(
                    'ds_accordion-item__header',
                )}
            >
                <h3
                    id={`${id}-heading`}
                    className={classNames(
                        'ds_accordion-item__title',
                    )}
                >
                    { title }
                </h3>
                <span className="ds_accordion-item__indicator" />
                { /* eslint-disable jsx-a11y/label-has-associated-control */}
                <label
                    className="ds_accordion-item__label"
                    htmlFor={`${id}-control`}
                >
                    <span className="visually-hidden">Show this section</span>
                </label>
                { /* eslint-enable jsx-a11y/label-has-associated-control */}
            </header>
            <div className="ds_accordion-item__body">
                { children }
            </div>
        </article>
    );
};

/**
 * @param {ScotGov.Component.Accordion} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Accordion:React.FC<ScotGov.Component.Accordion> = function ArticleAside({
    children,
    toggleAll,
    ...props
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new Accord(ref.current).init();
        }
    }, [ref]);

    return (
        <section
            className={classNames(
                'ds_accordion',
            )}
            {...props}
            ref={ref}
        >
            { toggleAll && (
                <button
                    type="button"
                    className={classNames(
                        'ds_link',
                        'ds_accordion__open-all',
                        'js-open-all',
                    )}
                >
                    Open all
                    {' '}
                    <span className="visually-hidden">sections</span>
                </button>
            )}
            { children }
        </section>
    );
};

export default Accordion;
