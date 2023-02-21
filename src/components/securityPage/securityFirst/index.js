import React from 'react';
import { Button } from 'antd';
import { Trans as T } from 'react-i18next';

import './style.css';

export const SecurityFirst = () => {
  return (
    <div className="first-title">
      <h1 className='security-title'>Plasbit security</h1>
      <p className="title">
        <span style={{ color: '#1890ff' }}>
          <T>securityPage.first.title.0</T>
        </span>
        <T>securityPage.first.title.1</T>
      </p>
      <p className="text">
        <span><T>securityPage.first.text.1</T></span> 
        <span><T>securityPage.first.text.0</T></span>
      </p>
      <Button
        type="primary"
        className="btn active secBtn"
        style={{fontSize:'22px'}}
      >
        <a href={`${process.env.REACT_APP_URL}signup`}> Get Started </a>
      </Button>
    </div>
  );
};
