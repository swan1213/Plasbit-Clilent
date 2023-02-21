import React from 'react';
import { Row, Col } from 'antd';
import { Trans as T } from 'react-i18next';
import  Link from 'react-scroll/modules/components/Link';

export const AffiliateFirst = () => (
  <div className="affiliate-banner">
    <Row
      className="affiliate_banner_crystal"
      style={{
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
      }}
    >
      <Col md={12} sm={24} xs={24}>
        <h1 className="affiliate-banner-title-h1">
          <T>affiliatePage.first.title.0</T>
        </h1>
        <div className="affiliate-banner-title">
          <T>affiliatePage.first.title.1</T>
          <br />
          <span>
            <T>affiliatePage.first.title.2</T>
          </span>
        </div>
        <div className="affiliate-banner-text">
          <T>affiliatePage.first.text.0</T>
          <br />
          <T>affiliatePage.first.text.1</T>
        </div>
        <div className="affiliate-banner-btngroup">
          <a href={`${process.env.REACT_APP_URL}signup`}>
            <button className="affiliate-banner-btn1">
              <T>affiliatePage.first.button.0</T>
            </button>
          </a>
          <Link to="fourthPage" smooth>
            <button className="affiliate-banner-btn2" style={{ marginTop: 10 }}>
              <T>affiliatePage.first.button.1</T>
            </button>
          </Link>
        </div>
      </Col>
      <Col className="affiliate_banner_imggroup" md={12} sm={24} xs={24}>
        <div className="affiliate_snapchat affiliate_icon" />
        <div className="affiliate_instagram affiliate_icon" />
        <div className="affiliate_linkedin affiliate_icon" />
        <div className="affiliate_youtube affiliate_icon" />
        <div className="affiliate_google affiliate_icon" />
        <div className="affiliate_facebook affiliate_icon" />
        <div className="affiliate_tiktok affiliate_icon" />
        <div className="affiliate_twitter affiliate_icon" />
        <div className="affiliate_cards" />
      </Col>
    </Row>
  </div>
);
