'use client';

import React from 'react';
import { useFormState } from 'react-dom';

import { Address, Types as AddressTypes } from '@dsds-react/patterns/Address';
import { Button, Types as ButtonTypes } from '@dsds-react/components/Button';
import { Types as SelectTypes } from 'dsds-react/dist/components/Select';
import { Types as InputTypes } from 'dsds-react/dist/components/TextInput';

import postcodeLookup from '@/lib/addressHandler';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const AddressForm:React.FC = function AddressForm() {
    const addresses = [
        {
            id: 'addr-1',
            label: '1 Address Street',
            value: '1',
        },
        {
            id: 'addr-2',
            label: '2 Address Street',
            value: '2',
        },
        {
            id: 'addr-3',
            label: '3 Address Street',
            value: '3',
        },
        {
            id: 'addr-4',
            label: '4 Address Street',
            value: '4',
        },
    ];

    const [formState, formAction] = useFormState(
        postcodeLookup,
        {
            message: '',
            addresses,
            postcode: '',
            state: AddressTypes.AddressState.PostcodeLookup,
        },
    );

    const fields = {
        postcodeLookup: {
            id: 'postcode-lookup',
            name: 'postcode-lookup',
            type: 'text',
            width: InputTypes.Width.Fixed10,
            label: 'Postcode',
            error: formState.error,
            value: formState.postcode,
            required: true,
        } as InputTypes.TextInput,
        addressSelect: {
            id: 'address-select',
            name: 'address-select',
            type: 'select',
            width: SelectTypes.Width.Fixed10,
            label: 'Select an address',
            required: true,
            items: formState.addresses,
            allowNull: true,
        } as SelectTypes.Select,

        address1: {
            id: 'address-1',
            name: 'address-1',
            type: 'text',
            label: 'Building and street',
            required: true,
        } as InputTypes.TextInput,
        address2: {
            id: 'address-2',
            name: 'address-2',
            type: 'text',
            label: 'Building and street',
            required: false,
        } as InputTypes.TextInput,
        city: {
            id: 'city',
            name: 'city',
            type: 'text',
            label: 'City',
            required: true,
        } as InputTypes.TextInput,
        country: {
            id: 'country',
            name: 'country',
            type: 'select',
            label: 'Country',
            required: true,
            items: [
                {
                    id: 'country-scotland',
                    label: 'Scotland',
                    value: 'Scotland',
                },
            ],
            allowNull: true,
        } as SelectTypes.Select,
        postcode: {
            id: 'postcode',
            name: 'postcode',
            type: 'text',
            width: InputTypes.Width.Fixed10,
            label: 'Postcode',
            required: true,
        } as InputTypes.TextInput,
    };

    return (
        <form action={formAction}>
            <Address
                id="address"
                state={formState.state}
                items={fields}
                lookup={postcodeLookup}
                labels={{
                    fullAddress: 'Tell us Jimmy’s full address',
                    fullAddressBtn: 'Or type in Jimmy’s full address',
                }}
            />
            <Button
                type={ButtonTypes.Type.Submit}
                icon="chevron_right"
            >
                Save and continue
            </Button>
        </form>
    );
};

export default AddressForm;
