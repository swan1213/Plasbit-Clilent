
import React from 'react';
import { Trans as T } from 'react-i18next';
import './First.css'

export const PageContentFirst = () => {

    return (
        <section className="blog_first outer">
            <div className="inner">
                <div className="site_header_content font_18">
                    <h1 className="site_title">
                        <span>Blog</span>
                    </h1>
                    <h2 className="site_description">
                        <T>blogPage.first.title</T>
                    </h2>
                </div>
            </div>
        </section>
    )
}
