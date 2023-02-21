import React from 'react';
import { Row, Col } from 'antd';
import { Trans as T } from 'react-i18next';
import './Fifth.css';
import { getLocalImg, useResize } from '../../../utils/helpers';

export const CommunityFifth = () => {
  const electronicFront = 'webp-images/community/usbFront.webp';
  const electronicBack = 'webp-images/community/usbBack.webp';
  const homeFront = 'webp-images/community/cupFront.webp';
  const homeBack = 'webp-images/community/cupBack.webp';
  const clothingFront = 'webp-images/community/TshirtFront.webp';
  const clothingBack = 'webp-images/community/TshirtBack.webp';
  const accesoriesFront = 'webp-images/community/capFront.webp';
  const accesoriesBack = 'webp-images/community/capBack.webp';
  const { isMobile } = useResize();

  const cards = [
    { title: 'Gadjets', image: electronicFront, imageBack: electronicBack },
    { title: 'Home & Living', image: homeFront, imageBack: homeBack },
    { title: 'Clothing', image: clothingFront, imageBack: clothingBack },
    { title: 'Caps', image: accesoriesFront, imageBack: accesoriesBack },
  ];

  return (
    <div className="community_fifth_container">
      <Row justify="center" className='community-fifth-container-row'>
        <Col md={24}>
          <div className="community_fifth_title">
            <T>communityPage.fifth.title</T>
          </div>
          <div className="community_fifth_text">
            <T>communityPage.fifth.text.0</T>
            {isMobile && <br/>}
            <span style={{ color: '#1890ff' }}>
              <T>communityPage.fifth.text.1</T>
            </span>
          </div>
        </Col>
        {
          cards?.map((item, index) => (
            <Col key={index} xl={6} lg={12} xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="community_fifth_card">
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 15 }}>
                  <img
                    src={getLocalImg(item.image)}
                    onMouseEnter={(e) => e.currentTarget.src = getLocalImg(item.imageBack)}
                    onMouseOut={(e) => e.currentTarget.src = getLocalImg(item.image)}
                    alt={item.title}
                  />
                </div>
                <div className="community_fifth_content" style={{ textAlign: 'center' }}>
                  {item.title}
                </div>
              </div>
            </Col>
          ))
        }
        <Col md={24}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a className="community_fifth_btn" href={`${process.env.REACT_APP_URL}signup`}>
              <T>communityPage.fifth.button</T>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};
