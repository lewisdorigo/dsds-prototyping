'use server';

import {
    AddressState,
    AddressFormState,
} from 'dsds-react/dist/patterns/Address/Address.type';

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

const postcodeLookup = async (state:AddressFormState, formData:FormData) => {
    const postcode = (
        formData.has('postcode-lookup')
            ? (formData.get('postcode-lookup') as string).trim()
            : undefined
    );

    if (!postcode) {
        return {
            ...state,
            error: {
                fieldId: 'postcode-lookup',
                message: 'Enter a postcode',
            },
            addresses: [],
            postcode,
            state: AddressState.PostcodeLookup,
        } as AddressFormState;
    }

    return {
        ...state,
        addresses,
        postcode,
        state: AddressState.SelectAddress,
    } as AddressFormState;
};

export default postcodeLookup;
