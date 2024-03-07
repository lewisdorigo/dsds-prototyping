import React from 'react';
import Link from 'next/link';

import Heading from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.Column} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ContactDetailsColumn: React.FC<ScotGov.Component.ContactDetails.Column> = function ContactDetailsColumn({
    items,
}) {
    return (
        <dl>
            { items.map(({
                title: heading,
                content,
                socials,
            }, index) => {
                const key = `contact-${index}`;
                return (
                    <div
                        className="ds_contact-details__item"
                        key={key}
                    >
                        <dt>{ heading }</dt>
                        { content && <dd>{ content }</dd> }
                        {(
                            socials
                            && Object.entries(socials).map(([network, { link, label }]) => {
                                const networkKey = `${key}-social-${network}`;
                                return (
                                    <dd
                                        className="ds_contact-details__social-item"
                                        key={networkKey}
                                    >
                                        <img
                                            className="ds_contact-details__social-icon"
                                            src={`/images/social-icons/${network}.svg`}
                                            alt=""
                                            aria-hidden="true"
                                        />
                                        <Link
                                            className="ds_contact-details__social-link"
                                            href={link || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {(
                                                label
                                                || (
                                                    network.charAt(0).toUpperCase()
                                                    + network.slice(1)
                                                )
                                            )}
                                        </Link>
                                    </dd>
                                );
                            })
                        )}
                    </div>
                );
            })}
        </dl>
    );
};

/**
 * @param {ScotGov.Component.ContactDetails} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ContactDetails: React.FC<ScotGov.Component.ContactDetails> = function Contact({
    headingLevel: tag = 'h2',
    title = 'Contact',
    className,
    items = undefined,
    columns: rawColumns = [],
    ...props
}) {
    let columns:ScotGov.Component.ContactDetails.Items[] = rawColumns;

    if (items) {
        columns = [
            items,
            ...rawColumns,
        ];
    }

    return (
        <section
            className={classNames(
                'ds_contact-details',
                className,
            )}
            {...props}
        >
            <Heading
                tag={tag}
                className="ds_contact-details__title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <address>
                {(
                    columns.length === 1
                        ? <ContactDetailsColumn items={columns[0]} />
                        : (
                            <div className="ds_contact-details-grid">
                                {columns.map((column, index) => {
                                    const key = `contact-column-${index}`;
                                    return (
                                        <div key={key} className="ds_contact-details__list">
                                            <ContactDetailsColumn items={column} />
                                        </div>
                                    );
                                })}
                            </div>
                        )
                )}

            </address>
        </section>
    );
};

export default ContactDetails;
