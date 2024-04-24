'use server';

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

/**
 * Gets the session.
 *
 * @returns {Promise<IronSession<ScotGov.Session>>} - The session object.
 */
const getSession = async function getSession() {
    return getIronSession<ScotGov.Session>(cookies(), {
        password: 'zZ8HfsXkFV8pfmKzxjc0Vw8vdpGyVwnYHQa',
        cookieName: 'prototype-toolkit',
        cookieOptions: {
            secure: false,
            maxAge: undefined,
            expires: undefined,
        },
    });
};

export default getSession;
