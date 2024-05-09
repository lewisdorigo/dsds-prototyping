import React from 'react';

import classNames from '@/lib/classNames';

import Wrapper from './Wrapper';
import WrapperTag from './WrapperTag';

/**
 * @param {ScotGov.Component.WrapperTag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Layout:React.FC<ScotGov.Component.Layout> = function Layout({
    children,
    layout: layoutType = 'article',
    header,
    partner,
    navigation,
    content,
    sidebar,
    feedback,
    className,
    ...props
}) {
    return (

        <Wrapper>
            <WrapperTag
                className={classNames(
                    'ds_layout',
                    layoutType ? `ds_layout--${layoutType}` : undefined,
                    className,
                )}
                {...props}
            >
                { header && (
                    <div className="ds_layout__header">
                        { header }
                    </div>
                )}
                { partner && (
                    <div className="ds_layout__partner">
                        { partner }
                    </div>
                )}
                { navigation && (
                    <div className="ds_layout__navigation">
                        { navigation }
                    </div>
                )}
                { (children || content) && (
                    <div className="ds_layout__content">
                        { children || content }
                    </div>
                )}
                { sidebar && (
                    <div className="ds_layout__sidebar">
                        { sidebar }
                    </div>
                )}
                { feedback && (
                    <div className="ds_layout__feedback">
                        { feedback }
                    </div>
                )}
            </WrapperTag>
        </Wrapper>
    );
};

export default Layout;
