import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { getImg, getLocalImg, useResize } from '../../../utils/helpers';
import { Trans as T } from 'react-i18next';
import LeftOutlined  from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';

const cards = [
  { key: 0, image: getLocalImg('cards/card-blue.png') },
  { key: 1, image: getLocalImg('cards/card-black.png') },
  { key: 2, image: getLocalImg('cards/card-grey.png') },
];
const colors = [
  { key: 0, color: 'white' },
  { key: 1, color: '#0f5db7' },
  { key: 2, color: '#eaebee' },
];

const prices = [
  [
    { title: 'Snapchat Ads', value: '-125.00$' },
    { title: 'Twitter Ads', value: '-255.00$' },
    { title: 'Google Ads', value: '-330.00$' },
    { title: 'YouTube Ads', value: '-125.00$' },
  ],
  [
    { title: 'LinkendIn Premium', value: '-30.00$' },
    { title: 'TikTok Ads', value: '-100.00$' },
    { title: 'Instagram Ads', value: '-350.00$' },
    { title: 'Snapchat Plus', value: '-20.00$' },
  ],
  [
    { title: 'Facebook Ads', value: '-220.00$' },
    { title: 'Shopify Advanced', value: '-299.00$' },
    { title: 'LinkendIn Ads', value: '-130.00$' },
    { title: 'YouTibe Premium', value: '-25.00$' },
  ],
];

export const AffiliateSecond = () => {
  const { isMobile } = useResize();
  const [cardImage, setCardImage] = useState(cards[1]);
  const [cardBackground, setCardBackground] = useState(colors[0].color);

  useEffect(() => {
    setCardBackground(colors[cardImage.key].color);
  }, [cardImage]);

  const onChangeCard = (type) => {
    const index = parseInt(cardImage.key) + type;

    if (index >= 0 && index < 3) {
      setCardImage(cards[index]);
    } else if (index < 0) {
      setCardImage(cards[2]);
    } else if (index === 3) {
      setCardImage(cards[0]);
    }
  };

  return (
    <Row className="affiliate_media" style={{ margin: 0 }}>
      <img
        className="affiliate_earth"
        src={getImg('affiliate/planet.png')}
        style={{
          width: 1440,
          height: 1386,
          top: 795,
          right: 0,
          padding: 0,
          opacity: 1,
          zIndex: -1,
          position: 'absolute',
        }}
        alt="affiliate_earth"
      />
      {
          !isMobile
          && (
          <Col md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className={cardImage.key === 1 ? 'affiliate_prev_white' : 'affiliate_prev'} onClick={() => onChangeCard(-1)}>
              <LeftOutlined />
            </button>
            <button className={cardImage.key === 1 ? 'affiliate_next_white' : 'affiliate_next'} onClick={() => onChangeCard(1)}>
              <RightOutlined />
            </button>
            <img
              style={{
                position: 'absolute',
                zIndex: 5,
                width: '22.2vw',
                height: '14.5vw',
                marginTop: '-8.5vw',
                marginLeft: '-6.8vw',
              }}
              src={cardImage.image}
              alt="cards"
            />
              {
                  prices[cardImage.key].map((item, index) => (
                    (cardImage.key === 0)
                      ? (
                        <div
                          key={index}
                          className={' affiliate_card_price' + ` affiliate_price_${index}`}
                          style={{ background: cardBackground, borderBottom: '2px solid lightgray' }}
                        >
                          <p>{item.title}</p>
                          <p>{item.value}</p>
                        </div>
                      )
                      : (
                        (cardImage.key === 1) ? (
                          <div key={index} className={' affiliate_card_price' + ` affiliate_price_${index}`} style={{ background: cardBackground, color: 'white' }}>
                            <p>{item.title}</p>
                            <p>{item.value}</p>
                          </div>
                        )
                          : (
                            <div key={index} className={' affiliate_card_price' + ` affiliate_price_${index}`} style={{ background: cardBackground }}>
                              <p>{item.title}</p>
                              <p>{item.value}</p>
                            </div>
                          )
                      )
                  ))
              }
            <div className="affiliate_spent_text" style={cardImage.key === 1 ? { background: cardBackground, color: 'white' } : { background: cardBackground }}>
              <div>
                <T>affiliatePage.second.cardTitle.0</T>
              </div>
              <div>
                <T>affiliatePage.second.cardTitle.1</T>
              </div>
            </div>
            <div className="affiliate_card_image" style={{ background: cardBackground }} />
          </Col>
          )
      }
      <Col md={12} className="affiliate_media_textgroup" style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
        <div>
          <div className="affiliate_media_font65bold">
            <T>affiliatePage.second.title.0</T>
            <br />
            <T>affiliatePage.second.title.1</T>
            <br />
            <T>affiliatePage.second.title.2</T>
            <br />
          </div>
          <div className="affiliate_media_font20bold">
            <T>affiliatePage.second.text.0</T>
            <T>affiliatePage.second.text.1</T>
          </div>
        </div>
      </Col>
      {
          isMobile
          && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
              className={cardImage.key === 1 ? 'affiliate_prev_white' : 'affiliate_prev'}
              onClick={() => onChangeCard(-1)}
            >
              <LeftOutlined />
            </button>
            <button
              className={cardImage.key === 1 ? 'affiliate_next_white' : 'affiliate_next'}
              onClick={() => onChangeCard(1)}
            >
              <RightOutlined />
            </button>
            <img
              style={{
                position: 'absolute',
                width: 293,
                height: 185,
                marginTop: -110,
                zIndex: 1,
              }}
              src={cardImage.image}
              alt="cards_mobile"
            />
            <img className="affiliate_mobile_media" src={getImg('affiliate/mobile_media.png')} alt="mobile_media" />
              {
                  prices[cardImage.key].map((item, index) => (
                    (cardImage.key === 0)
                      ? (
                        <div
                          key={index}
                          className={'affiliate_card_price_mobile' + ` affiliate_price_mobile_${index}`}
                          style={{ background: cardBackground, borderBottom: '2px solid lightgray' }}
                        >
                          <p>{item.title}</p>
                          <p>{item.value}</p>
                        </div>
                      )
                      : (
                        (cardImage.key === 1)
                          ? (
                            <div
                              key={index}
                              className={'affiliate_card_price_mobile' + ` affiliate_price_mobile_${index}`}
                              style={{ background: cardBackground, color: 'white' }}
                            >
                              <p>{item.title}</p>
                              <p>{item.value}</p>
                            </div>
                          )
                          : (
                            <div
                              key={index}
                              className={'affiliate_card_price_mobile' + ` affiliate_price_mobile_${index}`}
                              style={{ background: cardBackground }}
                            >
                              <p>{item.title}</p>
                              <p>{item.value}</p>
                            </div>
                          )
                      )
                  ))
        }
            <div
              className="affiliate_spent_text_mobile"
              style={cardImage.key === 1
                ? { background: cardBackground, color: 'white' } : { background: cardBackground }}
            >
              <div>
                <T>affiliatePage.second.cardTitle.0</T>
              </div>
              <div>
                <T>affiliatePage.second.cardTitle.1</T>
              </div>
            </div>
            <div className="affiliate_card_background_mobile" style={{ background: cardBackground }} />
          </div>)
      }
    </Row>
  );
};
