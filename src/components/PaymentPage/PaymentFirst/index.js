import React from 'react';
import { Trans as T } from 'react-i18next';
import { Link } from 'react-router-dom';
import './First.css';
import { getLocalImg, useResize } from '../../../utils/helpers';

export const PaymentFirst = () => {
  const { isMobile } = useResize();
  return (
    <div className="payment_first" style={{ background: `url(${getLocalImg('payment/payment_first.webp')})` }}>
      <div className="payment_first_container">
        <div>
          <div className="payment_first_font65">
            <T>paymentPage.first.title.0</T>
            {!isMobile && <br />}
            <span><T>paymentPage.first.title.1</T></span>
            {!isMobile && <br />}
            <T>paymentPage.first.title.2</T>
          </div>
          <div className="payment_first_font20">
            <T>paymentPage.first.subtitle</T>
          </div>
          <div className="payment_first_btngroup">
            <Link to="/">
              <button className="btn-integrate"><T>paymentPage.first.buttons.0</T></button>
            </Link>
            <Link to="/contact">
              <button className="btn-contact"><T>paymentPage.first.buttons.1</T></button>
            </Link>
          </div>
          {isMobile
          && (
          <div className="payment_first_mobile_img">
            <img src={getLocalImg('payment/mobile_payment_first.webp')} alt="mobile_payment" />
          </div>
          )}
        </div>
      </div>
    </div>
  );
};
