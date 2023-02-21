import React from 'react';
import { Trans as T } from 'react-i18next';
import './style.css';

export const SecurityFourth = () => {
  return (
    <div className="security-summary">
      <h2 className="title" style={{ color: '#1890ff' }}>
        <T>securityPage.forth.title</T>
      </h2>
      <div className="text">
        <T>securityPage.forth.text.0</T>
        <T>securityPage.forth.text.1</T>
      </div>
    </div>
  );
};
