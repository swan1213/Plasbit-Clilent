import React from 'react';
import { Row, Col } from 'antd';
import { CommunityCard } from '../CommunityCard';
import './Third.css';
import { Trans as T } from 'react-i18next';

const tweets = [
  { id: '1514876187671248897' },
  { id: '1514483596056162304' },
  { id: '1474697697588305925' },
];

export const CommunityThird = () => {
  return (
    <div className="community_third_container">
      <Row justify="center">
        <Col md={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="community_third_title">
            <T>communityPage.third.title</T>
          </div>
        </Col>
        {
            tweets?.map((id, index) => (
              <Col style={{display:'flex', justifyContent: 'center'}} key={index} lg={8} sm={20} xs={25}>
                <CommunityCard key={index} data={id} />
              </Col>
            ))
        }
      </Row>
    </div>
  );
};
