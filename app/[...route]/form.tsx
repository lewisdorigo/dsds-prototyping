'use client';

import React, { useEffect, useMemo, isValidElement } from 'react';
import { useFormState } from 'react-dom';
import type { Page as FormPage } from 'dsds-react/dist/utils/types/page';
import { FormComponent } from 'dsds-react/dist/utils/types';

import ComponentsHelper from '@dsds-react/components/ComponentHelper/ComponentHelper';
import { Provider as FormProvider } from '@dsds-react/context/FormContext/FormContext';

import Details from '@dsds-react/components/Details';
import ErrorSummary from '@dsds-react/components/ErrorSummary';
import FormNav from '@dsds-react/patterns/FormNav';

import SectionHeader from '@/components/SectionHeader';
import Grid from '@/components/Grid';

// import FieldsHelper from '@/patterns/FieldsHelper';

import handleSubmit from '@/lib/routeAction';

/**
 * @param {FormPage} props - The page props
 * @returns {JSX.Element} - The page
 */
const Form:React.FC<FormPage> = function Form({
    content: rawComponents,
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

    const customLookup = {
        'section-header': SectionHeader,
        grid: Grid,
    };

    const components = useMemo(() => (
        rawComponents.map((item) => {
            if (
                !item
                || typeof item !== 'object'
                || Object.prototype.hasOwnProperty.call(item, 'type')
                || Object.prototype.hasOwnProperty.call(item, 'name')
                || isValidElement(item)
            ) {
                return item;
            }

            const component = item as FormComponent;

            const errors = state.errors?.filter(({ fieldId }) => fieldId === component.id);

            return {
                ...item,
                error: errors && errors.length > 0 ? errors : undefined,
            };
        })
    ), [state.errors, rawComponents]);

    return (
        <FormProvider>
            <form action={formAction} noValidate>
                { state.errors && state.errors.length > 0 && (
                    <ErrorSummary items={state.errors} />
                ) }

                <ComponentsHelper
                    components={components}
                    customLookup={customLookup}
                />

                <input type="hidden" name="_form" value={route} />

                { (nextButton || backButton) && (
                    <FormNav
                        next={(
                            typeof nextButton !== 'undefined'
                                ? nextButton
                                : true
                        )}
                        back={(
                            typeof backButton !== 'undefined'
                                ? backButton
                                : true
                        )}
                    />
                )}

                { process.env.NODE_ENV === 'development' && (
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
                )}
            </form>
        </FormProvider>
    );
};

export default Form;
