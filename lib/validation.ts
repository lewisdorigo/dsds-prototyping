/**
 * Validates based on a regular expression pattern
 *
 * @param {RegExp} regex - The regex to test against
 * @param {string} [message] - The validation message to return
 * @returns {ScotGov.FormValidation} - A form validation function that accepts a value as a
 *  parameter.
 */
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

/**
 * Validates whether input is a valid National Insurance Number.
 *
 * @param {string} [message] - The validation message to return
 * @returns {ScotGov.FormValidation} - A form validation function that accepts a value as a
 *  parameter.
 */
export const isValidNino = function isValidNino(
    message:string = '',
):ScotGov.FormValidation {
    return pattern(
        /^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/,
        message || 'Please enter a valid national insurance number',
    );
};

/**
 * Validates that a value is shorter than the given length.
 *
 * @param {number} length - The maximum allowed length to validate against
 * @param {string} [message] - The validation message to return
 * @returns {ScotGov.FormValidation} - A form validation function that accepts a value as a
 *  parameter.
 */
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

/**
 * Validates that a value is longer than the given length.
 *
 * @param {number} length - The minimum allowed length to validate against
 * @param {string} [message] - The validation message to return
 * @returns {ScotGov.FormValidation} - A form validation function that accepts a value as a
 *  parameter.
 */
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
