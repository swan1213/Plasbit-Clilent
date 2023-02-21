import React, { useState } from 'react';
import { Trans as T } from 'react-i18next';
import { getLocalImg } from '../../../utils/helpers';
import './Sixth.css';

export const PaymentSixth = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth > 1600);
  window.onresize = () => {
    if (window.innerWidth > 1600) {
      setCurrentWidth(true);
    } else {
      setCurrentWidth(false);
    }
  };
  return (
    <div className="payment_sixth">
      <img src={getLocalImg('payment/map.webp')} alt="map" style={{ position: 'absolute', zIndex: -1, width: '90vw' }} />
      <div className="payment_sixth_container">
        <div className="payment_sixth_ml3">
          <div className="payment_sixth_group">
            <div className="payment_sixth_child payment_sixth_float">
              <span><T>paymentPage.sixth.text.0</T></span>
              <img src={getLocalImg('payment/card_3.webp')} alt="card" />
            </div>
            <div className="payment_sixth_linegroup">
              <div className="payment_sixth_line1" />
              <div className="payment_sixth_line2" style={{ transform: 'skewY(45deg)', marginTop: 40 }} />
            </div>
          </div>
          <div className="payment_sixth_group payment_sixth_mt_5">
            <div className="payment_sixth_child payment_sixth_float">
              <span style={{ marginTop: '-5px' }}><T>paymentPage.sixth.text.1</T></span>
              <img src={getLocalImg('payment/card_4.webp')} alt="card" />
            </div>
            <div className="payment_sixth_linegroup">
              <div className="payment_sixth_line1" />
              <div className="payment_sixth_line2" style={{ transform: 'skewY(-45deg)', marginTop: -40 }} />
            </div>
          </div>
        </div>
        <div>
          <div className="payment_sixth_basecircle">
            <div className="spin">
              <img className="payment_sixth_circle_left" src={getLocalImg('payment/circle_left.webp')} alt="circle_left" />
              <img className="payment_sixth_circle_right" src={getLocalImg('payment/circle_right.webp')} alt="circle_right" />
            </div>
            <div className="payment_sixth_font65">
              <div>
                <span>
                  <T>paymentPage.sixth.main_text.0</T>
                </span>
                <p><T>paymentPage.sixth.main_text.1</T></p>
              </div>
            </div>
          </div>
        </div>
        <div className="payment_sixth_mr3">
          <div className="payment_sixth_group">
            <div className="payment_sixth_linegroup">
              <div className="payment_sixth_line2" style={{ transform: 'skewY(-45deg)', marginTop: 40 }} />
              <div className="payment_sixth_line1" />
            </div>
            <div className="payment_sixth_child">
              {currentWidth && <img src={getLocalImg('payment/card_1.webp')} alt="card1" />}
              <span><T>paymentPage.sixth.text.2</T></span>
              {!currentWidth && <img src={getLocalImg('payment/card_1.webp')} alt="card1" />}
            </div>
          </div>
          <div className="payment_sixth_group payment_sixth_mt_5">
            <div className="payment_sixth_linegroup">
              <div className="payment_sixth_line2" style={{ transform: 'skewY(45deg)', marginTop: -40 }} />
              <div className="payment_sixth_line1" />
            </div>
            <div className="payment_sixth_child">
              {currentWidth && <img src={getLocalImg('payment/card_2.webp')} alt="card" />}
              <span><T>paymentPage.sixth.text.3</T></span>
              {!currentWidth && <img src={getLocalImg('payment/card_2.webp')} alt="card" /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
