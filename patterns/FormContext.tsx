'use client';

import React, { createContext, useMemo, useState } from 'react';

const FormContext = createContext<ScotGov.FormContext>({
    formState: {},
    setFormState: () => {},
});

export const Provider:React.FC<React.PropsWithChildren> = function Provider({ children }) {
    const [formState, setFormState] = useState<ScotGov.FormContext.FormState>({});

    const data:ScotGov.FormContext = useMemo(() => ({
        formState,
        setFormState: (key, value) => {
            setFormState({
                ...formState,
                [key]: value,
            });
        },
    }), [formState, setFormState]);

    return (
        <FormContext.Provider value={data}>
            { children }
        </FormContext.Provider>
    );
};

export default FormContext;
