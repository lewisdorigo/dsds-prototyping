import React from 'react';

import { ArticleAside } from '@dsds-react/components/ArticleAside';
import { Link } from '@dsds-react/components/Link';

/**
 * @returns {JSX.Element} - The page
 */
const Feedback:React.FC = function Feedback() {
    return (
        <ArticleAside
            label="Service feedback"
        >
            <p>
                <Link
                    href="https://github.com/lewisdorigoSoSec/dsds-prototyping/issues/new"
                    target="_blank"
                >
                    Report a problem
                </Link>
                {' '}
                with this online form.
            </p>
        </ArticleAside>
    );
};

export default Feedback;
