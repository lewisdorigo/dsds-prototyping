import types from '../data/forms';

/**
 * Gets application data from `/prototype-data/application-types` for a given application.
 *
 * @param {string} form - The application key
 * @returns {false|ScotGov.ApplicationTypes.Type} - The application type, or false if the
 *  application doesn't exist;
 */
export default function getFormBySlug(form:string) {
    if (!form || typeof types[form] !== 'object') {
        return false;
    }

    return types[form];
}
