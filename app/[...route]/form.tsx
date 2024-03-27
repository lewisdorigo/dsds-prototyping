'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';
import FieldsHelper from '@/patterns/FieldsHelper';

import handleSubmit from '@/lib/routeAction';
import Details from '@/components/Details';
import ErrorSummary from '@/components/ErrorSummary';

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
    const status = useFormStatus();

    return (
        <form action={formAction} noValidate>
            { state.errors && state.errors.length > 0 && <ErrorSummary errors={state.errors} /> }
            <FieldsHelper fields={components} errors={state.errors} values={state.values} />
            <input type="hidden" name="_form" value={route} />

            { (nextButton || backButton) && (
                <ButtonGroup className="ds_!_margin-top--8 ds_!_margin-bottom--0">
                    { backButton && (
                        <Button
                            variants="cancel"
                            icon="chevron_left"
                            iconSide="left"
                            onClick={() => window.history.back()}
                        >
                            Back
                        </Button>
                    )}
                    { nextButton && (
                        <Button
                            type="submit"
                            icon="chevron_right"
                            iconSide="right"
                            aria-disabled={status.pending}
                        >
                            Save and continue
                        </Button>
                    )}
                </ButtonGroup>
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
