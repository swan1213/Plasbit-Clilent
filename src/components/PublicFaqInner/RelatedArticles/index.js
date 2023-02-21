import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

export const RelatedArticles = ({
  requestedArticle, allFaqArticles, searchedKeyword,
}) => {
  const location = useLocation();

  return (
    <div className="articlesSection">
      <div className="articleSectionTitle">Related Articles</div>
      <div className="articleListWraper">
        <ul className="articleList">
          {allFaqArticles.map((article) => (
            <li key={article._id} className="articleListItem">
              <Link to={{
                pathname: `/articles/${article.route}`,
                search: searchedKeyword.slice(1),
                state: { prevPath: location.pathname },
              }}
              >
                {article.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
