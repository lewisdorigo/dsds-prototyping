import types from '../prototype-data/application-types';

/**
 * Gets application data from `/prototype-data/application-types` for a given application.
 *
 * @param {string} application - The application key
 * @returns {false|WebFrontEnd.ApplicationTypes.Type} - The application type, or false if the
 *  application doesn't exist;
 */
export default function getApplicationBySlug(application:string) {
    if (!application || typeof types[application] !== 'object') {
        return false;
    }

    return types[application];
}
