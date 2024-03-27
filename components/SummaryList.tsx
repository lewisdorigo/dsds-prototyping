import React from 'react';
import classNames from '../lib/classNames';
import Link from './Link';

/**
 * @param {ScotGov.Component.SummaryList.Actions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryListActions:React.FC<
    ScotGov.Component.SummaryList.Actions
> = function SummaryListActions({
    actions,
}) {
    return (
        <div className="ds_summary-list__actions">
            <ul className="ds_summary-list__actions-list">
                { actions.map(({ label, action }, index) => {
                    const key = `summary-item-action-${index}`;

                    return (
                        <li
                            key={key}
                            className="ds_summary-list__actions-list-item"
                        >
                            <Link href={action}>
                                { label }
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

/**
 * @param {ScotGov.Component.SummaryList.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryListItem:React.FC<ScotGov.Component.SummaryList.Item> = function SummaryListItem({
    label,
    answer,
    actions,
    key,
}) {
    const id = key;

    return (
        <li className="ds_summary-list__item">
            <span className="ds_summary-list__key">{ label }</span>

            <span className="ds_summary-list__value" id={id as string}>
                <span className="visually-hidden">Your answer is:</span>
                <q className="ds_summary-list__answer">{ answer }</q>
            </span>

            { actions && actions.length > 0 && (
                <SummaryListActions actions={actions} />
            )}
        </li>
    );
};

/**
 * @param {ScotGov.Component.SummaryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryList:React.FC<ScotGov.Component.SummaryList> = function SummaryList({
    className,
    borders = true,
    items = [],
}) {
    return (
        <ol
            className={classNames(
                'ds_summary-list',
                !borders ? 'ds_summary-list--no-border' : '',
                className,
            )}
        >
            { items.map((item, index) => {
                const key = `summary-item-${index}`;

                return <SummaryListItem key={key} {...item} />;
            })}
        </ol>
    );
};

export default SummaryList;
