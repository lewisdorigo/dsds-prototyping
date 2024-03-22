import React from 'react';

import SummaryList from './SummaryList';
import Link from './Link';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.SummaryList.Actions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryCardActions:React.FC<
    ScotGov.Component.SummaryList.Actions
> = function SummaryListActions({
    actions,
}) {
    return (
        <ul className="ds_summary-card__actions-list">
            { actions.map(({ label, action }, index) => {
                const key = `summary-card-action-${index}`;

                return (
                    <li
                        key={key}
                        className="ds_summary-card__actions-list-item"
                    >
                        <Link href={action}>
                            { label }
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

/**
 * @param {ScotGov.Component.SummaryCard} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryCard:React.FC<ScotGov.Component.SummaryCard> = function SummaryCard({
    className,
    title,
    actions,
    borders,
    items = [],
}) {
    return (
        <div
            className={classNames(
                'ds_summary-card',
                className,
            )}
        >
            <div className="ds_summary-card__header">
                <h3 className="ds_summary-card-title">{ title }</h3>
                { actions && actions.length > 1 && (
                    <SummaryCardActions actions={actions} />
                )}
            </div>
            <div className="ds_summary-card__content">
                <SummaryList borders={borders} items={items} />
            </div>
        </div>
    );
};

export default SummaryCard;
