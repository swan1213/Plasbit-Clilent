import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import shuffle from 'lodash/shuffle';
import moment from 'moment';
import './style.css';
import { pageType, useResize } from '../../../../utils/helpers';

export const RssPreview = (props) => {
  const {
    background,
    text,
    xml,
    numCards,
  } = props;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isMobile, width } = useResize();
  const xmlData = useSelector((state) => state.routePages.pages)
    .filter((page) => page.type === pageType.RSS).map((xmlSource) => (xmlSource));

  const cardsToShow = (width, numCards) => {
    let maxCards = 4;
    if (width > 1100 && width < 1500) {
      numCards = numCards > maxCards ? maxCards : numCards;
      return numCards;
    } if (width < 1240 && !isMobile) {
      maxCards = 2;
      numCards = numCards > maxCards ? maxCards : numCards;
      return numCards;
    }
    return numCards;
  };

  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: isMobile ? 1 : cardsToShow(width, numCards),
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  useEffect(() => {
    const getRss = (xmlName) => {
      setLoading(true);
      const feedItems = [];
      for (const name of xmlName) {
        xmlData?.forEach((xmlData) => {
          const items = xmlData.listOfSubjects;
          if (xmlData.name === name && items?.length) {
            feedItems.push(...[...items].map((item) => ({
              link: item.link,
              title: item.title,
              description: item.description,
              image: item.image,
              source: xmlData.name,
              date: moment(item.pubDate).format('ddd, D MMM YYYY'),
            })));
          }
        });
      }
      const shuffledItems = shuffle(feedItems);
      setItems(shuffledItems.sort((a, b) => moment(b.date, 'ddd, D MMM YYYY').valueOf() - moment(a.date, 'ddd, D MMM YYYY').valueOf()));
    };
    getRss(xml);
    setLoading(false);
  }, [xml]);

  return (
    <>
      <div className="xml_widget" style={{ background, borderColor: text, width: `calc(${cardsToShow(width, numCards)}*225px)` }}>
        <section className="xml_first" style={{ borderColor: text }}>
          {items.length > 0 ? (
            <Slider {...sliderSettings} className="carousel-container">
              {items.map((item, index) => (
                <Row key={index}>
                  <Col xs={23} sm={23} lg={{ span: 23, offset: 0.5 }}>
                    <a href={item.link} style={{ color: text }} className="source-link" target="_blank" rel="noopener noreferrer">
                      <div className="carousel-item" style={{ color: text, border: `1px solid ${text}` }}>
                        <img className="carousel-item-img" src={item.image} alt={item.title} />
                        <h1 className="h1-style" style={{ color: text }}>{item.title}</h1>
                        <div className="item-date">
                          <p>{item.date}</p>
                        </div>
                        <div className="description_box">
                          <p>{item.description}</p>
                        </div>
                        <div className="button-box" />
                        <div className="source_text">
                          <p>{item.source}</p>
                        </div>
                      </div>
                    </a>
                  </Col>
                </Row>
              ))}
            </Slider>
          ) : (
            <div className="empty-text empty-rss">
              <span style={{ color: text }}>No items to display</span>
            </div>
          )}
          {loading
          && (
            <div className="empty-text empty-rss">
              <span style={{ color: text }}>Loading...</span>
            </div>
          )}
        </section>
        <a className="crypto-join-plasbit xml-join-plasbit" style={{ color: text }} href={`${process.env.REACT_APP_HOME_URL}`}>
          Powered by
          <div className="plasbit-logo" />
          plasbit.com
        </a>
      </div>
    </>
  );
};
