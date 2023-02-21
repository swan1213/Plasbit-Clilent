import React, { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import {
  useHistory, useLocation, useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findKeyWordIndexInBlocks, pageType } from '../../utils/helpers';
import './style.css';
import { PublicFaqSearchEngine } from '../PublicFaqSearchEngine';

const steps = {
  LOADING_RESULT: 'LOADING_RESULT',
  LOADED_RESULT: 'LOADED_RESULT',
};

export const PublicFaqSearchedResult = () => {
  const allFaqArticles = useSelector((state) => state.routePages?.pages).filter((page) => page.type === pageType.Article);
  const { keyword } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [step, setStep] = useState(steps.LOADING_RESULT);
  const [filteredData, setFilteredData] = useState([]);

  const leadToInnerPage = (faqArticleName) => {
    history.push({
      pathname: `/articles/${faqArticleName}`,
      search: keyword,
      state: { prevPath: location.pathname },
    });
  };

  useEffect(() => {
    setFilteredData(allFaqArticles?.filter(
      (article) => (
          article?.name.toLowerCase().includes(keyword.toLowerCase())
          || JSON.parse(article?.html)?.blocks[
            findKeyWordIndexInBlocks(keyword, JSON.parse(article?.html)?.blocks)
          ]?.text.includes(keyword.toLowerCase())
      ),
    ));
    setStep(steps.LOADED_RESULT);
  }, []);

  if (step === steps.LOADING_RESULT) {
    return <Spin />;
  }
  return (
    <>
      <div className="search_reslt_home_btn">
        <Button type="link" style={{fontWeight: 700}} onClick={() => history.goBack()}>Previous Page</Button>
      </div>
      <div className="Public_search_result_container">
        <PublicFaqSearchEngine allFaqArticles={allFaqArticles} />
        <nav className="itemList">
          <ul className="search-item">
            {
              filteredData?.map((article) => (
                <li key={article?._id}>
                  <div className="searchCard" role="button" aria-hidden="true" onClick={() => leadToInnerPage(article.route)}>
                    <h2>{article?.name}</h2>
                    <p>{article?.description}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  );
};

export { PublicFaqSearchedResult as default } from './index'
