import React from 'react';
import { useSelector } from 'react-redux';
import { PublicFaqSearchEngine } from '../PublicFaqSearchEngine';
import { WalletHelp } from '../WalletPage/WalletHelp';
import { pageType, siteCanonical, siteDescriptions, siteTitles } from '../../utils/helpers';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { PublicFaqOuterFirst } from './PublicFaqOuterFirst';
import { PublicFaqOuterSecond } from './PublicFaqOuterSecond';

import './index.css';


export const PublicFaqOuter = () => {
  const allFaqArticles = useSelector((state) => state.routePages?.pages).filter((page) => page.type === pageType.Article);
  const allFaqCards = useSelector((state) => state.routePages?.pages).filter((page) => page.type === pageType.FAQ).map((faqPage) => ( {allFaqCards : faqPage.listOfSubjects}));

    return (
      <>

        <CustomHelmet title={siteTitles.publicFaq} description={siteDescriptions.publicFaq} canonical={siteCanonical.publicFaq} />
        
        <div className="PublicFaq_Container">
          <div className="PublicFaq_inner_container">
            <PublicFaqOuterFirst />
            <PublicFaqSearchEngine allFaqArticles={allFaqArticles} />
            {allFaqCards.length && <PublicFaqOuterSecond allFaqCards={allFaqCards[0].allFaqCards} />}
          </div>
          <WalletHelp />
        </div>
      </>
    );
};

export { PublicFaqOuter as default } from './index';
