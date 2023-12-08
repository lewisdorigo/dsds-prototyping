declare module '*';

interface Window {
    /* eslint-disable @typescript-eslint/no-explicit-any */

    DS: { [key:string]: any },
    dialogPolyfill: any,
    dataLayer: any,

    /* eslint-enable @typescript-eslint/no-explicit-any */
}

declare namespace NodeJS {
    interface Process {
        browser: boolean,
    }
}
