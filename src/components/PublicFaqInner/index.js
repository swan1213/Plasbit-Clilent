import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { pageType } from '../../utils/helpers';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { PublicFaqSearchEngine } from '../PublicFaqSearchEngine';
import { ArticleSection } from './ArticleSection';
import './styles.css';

export const PublicFaqInner = () => {
  const { faqArticleName } = useParams();
  const history = useHistory();
  const allFaqArticles = useSelector((state) => state.routePages?.pages).filter((page) => page.type === pageType.Article);
  const requestedArticle = allFaqArticles.filter(
      (article) => article.route === faqArticleName
    ) || [];
    return (
      <>
        <CustomHelmet title={requestedArticle[0]?.name} description={requestedArticle[0]?.description}/>
        <div className="Public-faq-inner">
          <div className="inner-button_back">
            <Button type="link" style={{fontWeight: 700}} onClick={() => history.goBack()}>Previous Page</Button>
          </div>
          <PublicFaqSearchEngine allFaqArticles={allFaqArticles} />
          {requestedArticle && requestedArticle.length && (
          <ArticleSection
            requestedArticle={requestedArticle}
          />
          )}
          {/* {requestedArticle && requestedArticle.length
          && (
          <RelatedArticles
            requestedArticle={requestedArticle}
            allFaqArticles={allFaqArticles}
            searchedKeyword={location.search}
          />
          )} */}
        </div>
      </>  
    );
};

export { PublicFaqInner as default } from './index'
