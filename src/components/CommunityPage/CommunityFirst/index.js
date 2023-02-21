import React from 'react';
import { Trans as T } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getLocalImg } from '../../../utils/helpers';
import './First.css';

export const CommunityFirst = () => {
  return (
    <div className="community_first_container">
      <div className="community_first">
        <div className="community_first_title">
          <T>communityPage.first.title.0</T>
          <h1 className="community_first_title" style={{ color: '#01a9fe' }}><T>communityPage.first.title.1</T></h1>
        </div>
        <div className="community_first_text">
          <T>communityPage.first.text.0</T>
          <br />
          <T>communityPage.first.text.1</T>
          <T>communityPage.first.text.2</T>
        </div>
        <div>
          <Link to="/about">
            <button className="community_first_btn btn_1">
              <T>communityPage.first.buttons.0</T>
            </button>
          </Link>
          <Link to="/contact">
            <button className="community_first_btn btn_2">
              <T>communityPage.first.buttons.1</T>
            </button>
          </Link>
        </div>
      </div>
      <img alt="community_first_image1" className="community_first_image1" src={getLocalImg('webp-images/community/worldmapFirst.webp')} />
      <img alt="community_first_image2" className="community_first_image2" src={getLocalImg('webp-images/community/blockchainFirst.webp')} />
    </div>
  );
};
