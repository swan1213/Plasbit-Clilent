import React from 'react';
import { Row, Col } from 'antd';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';
import { getImg, getLocalImg, useResize } from '../../../utils/helpers';
import { Trans as T } from 'react-i18next';

import './Second.css';

export const CommunitySecond = () => {
  const { isMobile } = useResize();

  return (
    <div className="community_second_container">
      <Row justify="center" style={{ width: 1050 }}>
        <Col md={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h2 className="community_second_title">
              <T>communityPage.second.title.0</T>
              <span style={{ color: '#082848' }}>
                <T>communityPage.second.title.1</T>
              </span>
              {isMobile && <br />}
              <T>communityPage.second.title.2</T>
            </h2>
            <div className="community_second_text">
              <T>communityPage.second.text.0</T>
              <T>communityPage.second.text.1</T>
            </div>
          </div>
        </Col>
        <Col md={12} lg={10} className="community_justify_end">
          <div className="community_second_phone">
            <div>
              <img alt="community_phone" src={getLocalImg('webp-images/community/phone2Second.webp')} className="community_second_base" />
              <video autoPlay loop className="community_second_telegram_mp4" muted>
                <source src={getImg('community/telegram-mobile.mp4')} type="video/mp4" />
              </video>
            </div>
            <div>
              <a className="community_second_btn" href="https://t.me/Plasbit_Community">
                <img className="vector" src={getImg('navbar/telegram.png')} style={{ width: '1em', height: '1em', marginBottom: 0 }} alt="telegram" />
                <T>communityPage.second.buttons.0</T>
              </a>
            </div>
          </div>
        </Col>
        <Col md={12} lg={10} className="community_justify_end">
          <div className="community_second_phone">
            <div>
              <img alt="community_phone" src={getLocalImg('webp-images/community/phone2Second.webp')} className="community_second_base" />
              <div>
                <video autoPlay className="community_second_twitter_mp4" muted loop>
                  <source src={getImg('community/twitter-mobile2.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
            <div>
              <a className="community_second_btn" href="https://twitter.com/plasbit">
                <TwitterOutlined style={{ marginRight: 15 }} />
                <T>communityPage.second.buttons.1</T>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
