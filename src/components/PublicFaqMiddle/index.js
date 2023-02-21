import React from 'react';
import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import { useSelector } from 'react-redux';
import { PublicFaqSearchEngine } from '../PublicFaqSearchEngine';

import './style.css';
import { pageType } from '../../utils/helpers';
import { Helmet } from 'react-helmet-async';


export const PublicFaqMiddle = () => {
  const { faqCardRoute } = useParams();
  let parse = require('html-react-parser');
  let htmlRoutes;
  const allFaqArticles = useSelector((state) => state.routePages?.pages).filter((page) => page.type === pageType.Article);
  const faqCards = useSelector((state) => state.routePages?.pages).filter((page) => page.type === pageType.FAQ).map((faqPage) => ({allFaqCards : faqPage.listOfSubjects}));
  const relatedArticle = faqCards[0]?.allFaqCards.filter((card) => card.route === faqCardRoute) || [];
  const faqCardName = relatedArticle[0].name

  if (relatedArticle[0]?.html) {
    htmlRoutes = parse(draftToHtml(JSON.parse(relatedArticle[0]?.html)));
  }
      return (
        <>
        <Helmet>
          <title>{`${faqCardName}`}</title>
        </Helmet>
          <div className="PublicFaq_middle">
            <div className="middle_button_back">
              <Button type="link">
                <Link to="/public-faq" style={{fontWeight: 700}}> Previous Page </Link>
              </Button>
            </div>
            <PublicFaqSearchEngine allFaqArticles={allFaqArticles}/>
            <div className="PublicFaq_middle_container">
              <div className="PublicFaq_middle_container_title" style={{ padding: '2% 7%' }}>
                <h1 style={{
                  marginTop: '25px', color: '#58657a', fontWeight: '400', fontSize: '32px',
                }}
                >
                  {relatedArticle && relatedArticle[0]?.name}
                </h1>
                <p className="middle_container_desc" style={{ fontWeight: '300px', fontStyle: 'italic' }}>{relatedArticle && relatedArticle[0]?.desc}</p>
                <div className='h2_container'>
                  <h2 style={{display : 'none'}}>
                    {htmlRoutes}
                  </h2>
                  {htmlRoutes}
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export { PublicFaqMiddle as default } from './index'
