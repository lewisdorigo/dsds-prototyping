export const isValidNino = function isValidNino(message:string|undefined):ScotGov.FormValidation {
    return (value) => {
        if (!value || typeof value !== 'string') { return true; }

        if (
            !value.match(/^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/)
        ) {
            return message || 'Please enter a valid national insurance number';
        }

        return true;
    };
};

export const maxLength = function maxLength(length:number, message:string|undefined):ScotGov.FormValidation {
    return (value) => {
        if (!value || typeof value !== 'string') { return true; }

        if (value.length > length) {
            return message || `“{ label }” must be ${length} characters or fewer`;
        }

        return true;
    };
};
