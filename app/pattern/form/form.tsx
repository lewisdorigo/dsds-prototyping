'use client';

import React, { useState } from 'react';
import FormNav from '@/patterns/FormNav';
import Radios from '@/components/Radio';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Fields:React.FC = function Fields() {
    const [action, setAction] = useState<string>('https://google.com/');

    return (
        <form action={action}>
            <Radios
                name="go-next"
                id="go-next"
                label="Where would you like to go next?"
                hintText="Select an option"
                items={[
                    {
                        label: 'Google',
                        value: 'google',
                        defaultChecked: true,
                        onChange() {
                            setAction('https://google.com/');
                        },
                    },
                    {
                        label: 'DuckDuckGo',
                        value: 'ddg',
                        onChange() {
                            setAction('https://duckduckgo.com/');
                        },
                    },
                    {
                        label: 'Social Security Scotland',
                        value: 'sosec',
                        onChange() {
                            setAction('https://socialsecurity.gov.scot/');
                        },
                    },
                ]}
            />
            <FormNav
                next={{
                    label: 'Continue',
                }}
            />
        </form>
    );
};

export default Fields;
