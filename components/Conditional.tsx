import React, { useContext, useMemo } from 'react';

import FormContext from '@/patterns/FormContext';
import { parseConditional } from '@/lib/conditional';

/**
 * @param {ScotGov.Component.Conditional} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Conditional:React.FC<ScotGov.Component.Conditional> = function Conditional({
    conditional,
    children,
}) {
    const { formState } = useContext(FormContext);

    const isVisible = useMemo(
        () => parseConditional(conditional, formState),
        [
            formState,
            conditional,
        ],
    );

    if (!isVisible) {
        return null;
    }

    return (
        <div
            tabIndex={-1}
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        >
            { children }
        </div>
    );
};

export default Conditional;
