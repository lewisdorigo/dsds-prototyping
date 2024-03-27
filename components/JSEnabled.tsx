'use client';

import React, { useEffect } from 'react';

/**
 * Adds 'js-enabled' class to `<html>` on mount and removes on unmount. Does not render content.
 * @returns {React.ReactElement | null} Null, as it renders nothing.
 */
const JSEnabled:React.FC = function JSEnabled(): React.ReactElement | null {
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.classList.add('js-enabled');
        }
        return () => {
            if (htmlElement) {
                htmlElement.classList.remove('js-enabled');
            }
        };
    });

    return null;
};

export default JSEnabled;
