import React from 'react';
import { Trans as T } from 'react-i18next';
import { getImg, getLocalImg, useResize } from '../../../utils/helpers';

import './style.css';

const tags = [
  {
    title: <T>securityPage.second.subtitle.0</T>,
    text: <T>securityPage.second.text.0</T>,
  },
  {
    title: <T>securityPage.second.subtitle.1</T>,
    text: <T>securityPage.second.text.1</T>,
  },
 { 
    title: <T>securityPage.second.subtitle.2</T>,
    text: <T>securityPage.second.text.2</T>,},
   {
    title: <T>securityPage.second.subtitle.3</T>,
    text: <T>securityPage.second.text.3</T>,
 }
];

const QuestionTag = ({ title, text }) => (
  <div className="question_tag" style={{ marginTop: '.4em' }}>
    <div style={{ marginRight: '.3em' }}>
      <img src={getImg('security/check.png')} style={{ marginTop: '-0.5em', width:'min-content', height:'min-content' }} alt="check" />
    </div>
    <div>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </div>
  </div>
);

export const SecurityThird = () => {
  const { isMobile } = useResize();

  return (
    <div
      className="question"
      style={{
        backgroundImage: `url(${getLocalImg('webp-images/security/security_recbg.webp')}`,
      }}
    >
      <div className="inner-container">
        <div className="inner-text">
          <div className="big_title">
            <p><T>securityPage.second.title.0</T></p>
            <p><T>securityPage.second.title.1</T></p>
          </div>
          <div>
            {
              tags.map(({ title, text }, index) => (
                <QuestionTag key={index.toString()} title={title} text={text} />
              ))
            }
          </div>
        </div>
        <img className="security-question__numbers" src={getLocalImg('webp-images/security/security_nums.webp')} alt="numbers" />
        <div className='bg' style={isMobile ? { backgroundImage: `url(${getLocalImg('webp-images/security/security_nums.webp')}`, backgroundSize: 'cover' } : { backgroundImage: 'none' }}>
          <img src={getLocalImg('webp-images/security/security_shield.webp')} alt="shield" width="100%" />
        </div>
      </div>
    </div>
  );
};
