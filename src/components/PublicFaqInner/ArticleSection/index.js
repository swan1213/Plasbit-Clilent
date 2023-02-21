import React from 'react';
import draftToHtml from 'draftjs-to-html';
import moment from 'moment';
import DOMPurify from 'dompurify';
import { getImg } from '../../../utils/helpers';

import './style.css';
import { Link } from 'react-router-dom';
import { Image } from 'antd';

export const ArticleSection = ({ requestedArticle }) => {
  return (
    <>
      <div className="cardSection">
        <div className="cardContent">
          <h1 className="cardTitle">
            {requestedArticle[0]?.name}
          </h1>
          <div className="cardInfoWrapper">
            <div className="cardInfo">
              <div className="cardUserIconWrapper">
                <Image 
                  width={40}
                  height={40}
                  src={requestedArticle[0]?.subImage}
                  preview = {false}
                  alt = {'author-profile'}
                  rootClassName={'author-profile-image'}
                />
              </div>
              <div className="cardUsername">{requestedArticle[0]?.author}</div>
              <div className="lastVisited">{moment(requestedArticle[0]?.dateCreated).fromNow()}</div>
            </div>
          </div>
          <div className="cardDescription">
            <div dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                draftToHtml(JSON.parse(requestedArticle[0]?.html)),
              ),
            }}
            />
          </div>
          <div className="socialIconsWrapper">
            <ul className="socialIconList">
              <li className="socialIconItem">
                <a target="_blank" rel="noreferrer" href="https://telegram.me/plasbit">
                  <img src={getImg('navbar/social-1.svg')} alt="telegram" />
                </a>
              </li>
              <li className="socialIconItem">
                <a href="https://twitter.com/plasbit" target="_blank" rel="noreferrer">
                  <img src={getImg('navbar/social-3.svg')} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="helpfulWrapper">
          <div className="helpfulLabel">
            Have more questions?
            {' '}
            <Link to="/contact" style={{color: '#61aaff'}}>Submit a request</Link>
          </div>
        </div>
      </div>
    </>
  );
};
