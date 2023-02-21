import React from 'react';
import { getImg, getLocalImg } from '../../../utils/helpers';

import './style.css';

export const SecurityFifth = () => {
  return (
    <div className="logos">
      <div className="logo-container">
        <div><img src={getImg('security/ledger.png')} alt="ledger logo" /></div>
        <div><img src={getLocalImg('webp-images/security/security_armanio.webp')} alt="armanino logo" /></div>
        <div><img src={getLocalImg('webp-images/security/security_aws.webp')} alt="amazon web service logo" /></div>
      </div>
    </div>
  );
};
