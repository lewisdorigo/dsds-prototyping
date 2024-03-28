'use client';

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';

import Details from '@/components/Details';
import ErrorSummary from '@/components/ErrorSummary';

import FormNav from '@/patterns/FormNav';
import FieldsHelper from '@/patterns/FieldsHelper';

import handleSubmit from '@/lib/routeAction';

/**
 * @param {ScotGov.Pages.FormPage} props - The page props
 * @returns {JSX.Element} - The page
 */
const Form:React.FC<ScotGov.Pages.FormPage> = function Form({
    components,
    nextButton,
    backButton,
    route,
}) {
    const [state, formAction] = useFormState<ScotGov.Form.State, FormData>(
        handleSubmit,
        { message: '', errors: [], values: {} },
    );

    useEffect(() => {
        if (state.errors?.length) {
            window.scrollTo({ top: 0, left: 0 });
        }
    }, [state.errors]);

    return (
        <form action={formAction} noValidate>
            { state.errors && state.errors.length > 0 && <ErrorSummary errors={state.errors} /> }
            <FieldsHelper fields={components} errors={state.errors} values={state.values} />
            <input type="hidden" name="_form" value={route} />

            { (nextButton || backButton) && (
                <FormNav next={nextButton} back={backButton} />
            )}
            <Details label="View form state">
                <output>
                    <pre>
                        <code
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(state, undefined, 4),
                            }}
                        />
                    </pre>
                </output>
            </Details>
        </form>
    );
};

export default Form;
