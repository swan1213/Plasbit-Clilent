import React from 'react';
import { useHistory } from 'react-router-dom';

export const PublicFaqMiddleCard = ({ article, parentOfArticles }) => {
  const { route,name, description } = article;
  const history = useHistory();

  const leadToArticlePage = (route) => {
    history.push({
      pathname: route ? `/public-faq-article-view/${route}` : `/categories/${parentOfArticles[0].name}`,
      state: { prevPath: `/categories/${parentOfArticles[0].name}` },
    });
  };
  return (
    <div className="PublicFaq_middle_content" role="button" aria-hidden="true" onClick={() => { leadToArticlePage(route); }}>
      <div className="card_title">
        {name}
      </div>
      <div className="card_Description">
        {description}
      </div>
    </div>
  );
};
