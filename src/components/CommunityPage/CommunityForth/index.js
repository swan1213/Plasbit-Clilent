import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import LeftOutlined  from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { getLocalImg, useResize } from '../../../utils/helpers';
import { Trans as T } from 'react-i18next';
import './Forth.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CommunityFourth = () => {
  const { isMobile } = useResize();
  const [settings, setSetting] = useState();

  useEffect(() => {
    setSetting({
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1 : 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <Arrow className="slick-prev" icon={<LeftOutlined style={{ height: 40, width: 24 }} />} />,
      nextArrow: <Arrow className="slick-next" icon={<RightOutlined />} />,
    });
  }, [isMobile]);
  const CardSlick1 = 'webp-images/community/card1_Fourth.webp';
  const CardSlick2 = 'webp-images/community/card2_Fourth.webp';
  const CardSlick3 = 'webp-images/community/card3_Fourth.webp';
  const CardSlick4 = 'webp-images/community/card4_Fourth.webp';

  const cards = [
    { title: '@luke-carmeo', image: CardSlick1 },
    { title: '@cryptoTrader', image: CardSlick2 },
    { title: '@ann_harison', image: CardSlick3 },
    { title: '@another45one', image: CardSlick4 },
    { title: '@upsideDown', image: CardSlick1 },
    { title: '@ben_polanski', image: CardSlick2 },
    { title: '@ahmed1992', image: CardSlick3 },
    { title: '@bestTrader', image: CardSlick4 },
  ];

  const Arrow = ({ className, icon, onClick }) => (
    <button type="button" data-role="none" style={{ backgroundColor: 'red' }} className={className} onClick={onClick}>
      {icon}
    </button>
  );
  return (
    <div className="community_forth_container">
      <div className="community_forth_title">
        <T>communityPage.fourth.title.0</T>
        <T>communityPage.fourth.title.1</T>
      </div>
      <div className="community_forth_text">
        <T>communityPage.fourth.text</T>
      </div>
      <Slider {...settings}>
        {
          cards?.map((item, index) => (
            <div key={index} className="community_forth_slick_card">
              <img alt={item.image} src={getLocalImg(item.image)} />
              <p className="community_forth_content">{item.title}</p>
            </div>
          ))
        }
      </Slider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a className="community_forth_btn" href="https://twitter.com/plasbit">
          <T>communityPage.fourth.button</T>
        </a>
      </div>
    </div>
  );
};
