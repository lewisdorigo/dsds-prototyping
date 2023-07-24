import React from 'react';

import Question from './Question';
import Input from './Input';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ComponentHelper: React.FC<any> = function ComponentHelper({
    component,
}) {
    if (typeof component === 'string') {
        return component;
    }

    if (typeof component.type !== 'string') {
        throw new Error('Component does type have a type set.');
    }

    switch (component.type) {
        default:
            return (
                <Question field={component}>
                    <Input {...component} />
                </Question>
            );
            break;
    }
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ComponentsHelper: React.FC<any> = function ComponentsHelper({
    components
}) {
    return components.map((component) => <ComponentHelper component={component} />);
};

export default ComponentsHelper;
