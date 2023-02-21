import React from 'react';
import { Trans as T } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { Article } from '../Article';
import './Feed.css';



export const PageContentFeed = ({routePages,type}) => {

    const routePagesFiltered  = routePages
        .filter(page => page.type === type).sort((a, b) => {
            return new Date(b.dateCreated) - new Date(a.dateCreated);
        })
    const { pathname } = useLocation(); 

    return (
        <section className="blog_feed outer">
            <div className="inner">
                <div className="post_feed">
                    {
                        routePagesFiltered.map((page, index) => {
                                if(index === 0 || index % 6 === 0) {
                                    return (<Article sort="post_card_large" page={page} key={index} pathName={pathname}/>)
                                }
                                else {
                                    return (<Article sort="" page={page} key={index} pathName={pathname}/>)
                            }
                        })
                    }
                </div>
                <div className="mb_30 read_more">
                    <button className="btn active"><T>blogPage.feed.button</T></button>
                </div>
            </div>
        </section>
    )
}
