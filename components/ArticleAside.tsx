import React from 'react';

import Wrapper from './Wrapper';

import classNames from '../lib/classNames';

/**
 * @param {React.PropsWithChildren} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ArticleAside:React.FC<React.PropsWithChildren> = function ArticleAside({
    children,
    ...props
}) {
    return (
        <Wrapper>
            <div
                className={classNames(
                    'ds_article-aside',
                    'ds_!_margin-top--8',
                )}
                {...props}
            >
                { children }
            </div>
        </Wrapper>
    );
};

export default ArticleAside;
