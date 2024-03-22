import React from 'react';

import WrapperTag from './WrapperTag';
import HintText from './HintText';

import classNames from '../lib/classNames';
import Link from './Link';

/**
 * @param {ScotGov.Component.TaskList.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskListItem:React.FC<ScotGov.Component.TaskList.Item> = function TaskListItem({
    id,
    label,
    summary,
    status,
    link,
}) {
    let statusLabel;

    switch (status) {
        case 'complete':
            statusLabel = 'Complete';
            break;

        case 'in-progress':
            statusLabel = 'In Progress';
            break;

        case 'cannot-start':
            statusLabel = 'Cannot start yet';
            break;

        default:
            statusLabel = 'Not started';
            break;
    }

    const heading = (
        <>
            { label }
            <span className="visually-hidden">
                {`(${statusLabel})`}
            </span>
        </>
    );

    return (
        <li className="ds_task-list__task" id={`task-item-${id}`}>
            <div className="ds_task-list__task-details">
                <h3 className="ds_task-list__task-heading">
                    {(
                        link && status !== 'cannot-start'
                            ? (
                                <a
                                    className="ds_task-list__task-link"
                                    href={link}
                                >
                                    { heading }
                                </a>
                            )
                            : heading
                    )}
                </h3>
                { summary && (
                    <HintText className="ds-task-list__task-summary">
                        { summary }
                    </HintText>
                )}
            </div>
            <div
                className={classNames(
                    'ds_task-list__task-status',
                    `ds_task-list__task-status--${status}`,
                )}
                aria-hidden="true"
            >
                { statusLabel }
            </div>
        </li>
    );
};

/**
 * @param {ScotGov.Component.TaskList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskList:React.FC<ScotGov.Component.TaskList> = function TaskList({
    label,
    summary,
    sections,
    ordered = false,
}) {
    return (
        <>
            <h2 className="ds_task-list-heading">{ label }</h2>
            { summary && <p>{ summary }</p> }
            <WrapperTag
                tag={ordered ? 'ol' : 'ul'}
                className={classNames(
                    'ds_task-list',
                    ordered ? 'ds_task-list--ordered' : '',
                )}
            >
                { sections.map((section, index) => {
                    const key = `task-list-group-${index}`;

                    return (
                        <TaskListItem key={key} {...section} />
                    );
                })}
            </WrapperTag>
        </>
    );
};

/**
 * @param {ScotGov.Component.TaskList.Group} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const TaskListGroup:React.FC<ScotGov.Component.TaskList.Group> = function TaskListGroup({
    heading,
    groups,
    summary,
    ordered = false,
}) {
    let allSections:ScotGov.Component.TaskList.Item[] = [];
    groups.forEach(({ sections }) => {
        allSections = [
            ...allSections,
            ...sections,
        ];
    });

    const numSections = allSections.length;
    const numComplete = allSections.filter(({ status }) => status === 'complete').length;
    const firstIncomplete = allSections.find(({ status }) => status !== 'complete');

    return (
        <>
            { heading && (
                <h2 className="ds_task-list-status-heading">{ heading }</h2>
            )}
            { summary && <p>{summary}</p>}
            <nav>
                <p>
                    You have completed
                    {` ${numComplete} of ${numSections} `}
                    sections.
                </p>
                { firstIncomplete && (
                    <p>
                        <Link href={`#task-item-${firstIncomplete.id}`}>
                            Skip to first incomplete section
                        </Link>
                    </p>
                )}
            </nav>
            <WrapperTag
                tag={ordered ? 'ol' : 'ul'}
                className={classNames(
                    'ds_task-list-group',
                    ordered ? 'ds_task-list-group--ordered' : '',
                )}
            >
                { groups.map((group, index) => {
                    const key = `task-list-group-${index}`;

                    return (
                        <li key={key} className="ds_task-list-group__section">
                            <TaskList {...group} />
                        </li>
                    );
                })}
            </WrapperTag>
        </>
    );
};

export default TaskList;
