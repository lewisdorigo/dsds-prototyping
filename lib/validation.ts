export const pattern = function pattern(
    regex:RegExp,
    message:string = '',
):ScotGov.FormValidation {
    return (value) => {
        if (!value || typeof value !== 'string') { return true; }

        if (!value.match(regex)) {
            return (
                message
                || `“{ label }” must match the pattern \`${regex}\``
            );
        }

        return true;
    };
};

export const isValidNino = function isValidNino(
    message:string = '',
):ScotGov.FormValidation {
    return pattern(
        /^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/,
        message || 'Please enter a valid national insurance number',
    );
};

export const maxLength = function maxLength(
    length:number,
    message:string = '',
):ScotGov.FormValidation {
    return (value) => {
        if (!value || typeof value !== 'string') { return true; }

        if (value.length > length) {
            return (
                message
                || `“{ label }” must be ${length} characters or fewer`
            );
        }

        return true;
    };
};

export const minLength = function minLength(
    length:number,
    message:string = '',
):ScotGov.FormValidation {
    return (value) => {
        if (!value || typeof value !== 'string') { return true; }

        if (value.length < length) {
            return (
                message
                || `“{ label }” must be ${length} characters or more`
            );
        }

        return true;
    };
};
