import React from 'react';
import { Trans as T } from 'react-i18next';
import { Link } from 'react-router-dom';
import RightOutlined from '@ant-design/icons/RightOutlined';
import './Second.css';
import { getLocalImg } from '../../../utils/helpers';

export const PaymentSecond = () => (
  <div className="payment_second">
    <div className="payment_second_container">
      <div className="payment_second_font65"><T>paymentPage.second.title</T></div>
      <div className="payment_second_font35">
        <p>
          <T>paymentPage.second.text.0</T>
          <br />
          <a>
            <T>paymentPage.second.text.2</T>
            <RightOutlined />
          </a>
        </p>
      </div>
      <div className="payment_second_font25">
        <p>
          <T>paymentPage.second.text.1</T>
        </p>
      </div>
      <div className="payment_second_imggroup">
        <img src={getLocalImg('payment/react.webp')} alt="react" />
        <img src={getLocalImg('payment/angular.webp')} alt="angular" />
        <img src={getLocalImg('payment/javascript.webp')} alt="javascript" />
        <img src={getLocalImg('payment/apple.webp')} alt="apple" />
        <img src={getLocalImg('payment/android.webp')} alt="android" />
      </div>
      <div className="payment_second_imgs">
        <img src={getLocalImg('payment/payment_app.webp')} alt="payment_app" />
        <img src={getLocalImg('payment/payment_code.webp')} alt="payment_code" />
      </div>
      <div className="payment_second_btngroup">
        <Link to="/">
          <button><T>paymentPage.second.buttons.0</T></button>
        </Link>
        <Link to="/contact">
          <button><T>paymentPage.second.buttons.1</T></button>
        </Link>
      </div>
    </div>
  </div>
);
