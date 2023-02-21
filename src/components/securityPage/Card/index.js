import React from 'react';
import { getImg } from '../../../utils/helpers';

import './Card.css';

export const SecurityCard = (props) => {
  const { title, image, text } = props.cardContent;
  return (
    <div className="security_card">
      <div className='security_card--content'>
        <div className="security_card--leading">
          <p className="title">{ title }</p>
          <p className="text">{ text }</p>
        </div>
        <div className="sep_line" />
        <img style={{marginTop: '40px'}} className="img" src={getImg(image)} alt="line" />
      </div>
    </div>
  );
};
