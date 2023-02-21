import React from 'react';
import { useSelector } from 'react-redux';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical, PageType } from '../../utils/helpers';
import { PageContentFirst } from './PageContentFirst';
import { PageContentFeed } from './PageContentFeed';

import './PageContent.css';



export const ContentPage = ({type}) => {

    const routePages = useSelector(state => state?.routePages?.pages);

    return (
        <>
            {type === PageType.Blog &&
                <CustomHelmet title={siteTitles.Blog} description={siteDescriptions.Blog} canonical={siteCanonical.blog} />
            }
            {
                type === PageType.CryptoBasic &&
                <CustomHelmet title={siteTitles.CryptoBasic} description={siteDescriptions.CryptoBasic} canonical={siteCanonical.cryptoBasic}/>
            }
            {
                type === PageType.CryptoAdvanced &&
                <CustomHelmet title={siteTitles.CryptoAdvanced} description={siteDescriptions.CryptoAdvanced} canonical={siteCanonical.cryptoAdvanced} />
            }
            {
                type === PageType.Anonymous &&
                <CustomHelmet title={siteTitles.Anonymous} description={siteDescriptions.Anonymous} canonical={siteCanonical.anonymous}/>
            }

            <div className="App">
                <main className="main_blog">
                    <PageContentFirst />
                    <PageContentFeed routePages={routePages} type={type}/>
                </main>
            </div>
        </>
    );
};

export { ContentPage as default } from './index';
