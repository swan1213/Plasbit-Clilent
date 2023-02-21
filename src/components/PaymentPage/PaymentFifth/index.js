import React from 'react';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import { getLocalImg, useResize } from '../../../utils/helpers';
import { Trans as T } from 'react-i18next';
import './Fifth.css';

export const PaymentFifth = () => {
  const { isMobile } = useResize();
  return (
    <div className="payment_fifth">
      <div className="payment_fifth_container">
        <div className="payment_fifth_font81"><T>paymentPage.fifth.title</T></div>
        <div className="payment_fifth_font40"><T>paymentPage.fifth.subtitle</T></div>
        <div className="payment_fifth_setup">
          <div style={{ marginRight: -15 }}>
            <div className="payment_fifth_imgpanel">
              <img src={getLocalImg('payment/setup.webp')} alt="setup" />
            </div>
            <p><T>paymentPage.fifth.text.0</T></p>
          </div>
          <div className="payment_fifth_arrow">
            <div>
              {isMobile ? '---' : '------'}
              <ArrowRightOutlined />
            </div>
          </div>
          <div>
            <div className="payment_fifth_imgpanel">
              <img src={getLocalImg('payment/choose.webp')} alt="choose" />
            </div>
            <p>
              <T>paymentPage.fifth.text.1</T>
            </p>
          </div>
          <div className="payment_fifth_arrow">
            <div>
              {isMobile ? '---' : '------'}
              <ArrowRightOutlined />
            </div>
          </div>
          <div>
            <div className="payment_fifth_imgpanel">
              <img src={getLocalImg('payment/place.webp')} alt="place" />
            </div>
            <p>
              <T>paymentPage.fifth.text.2</T>
            </p>
          </div>
          <div className="payment_fifth_arrow">
            <div>
              {isMobile ? '---' : '----'}
              <ArrowRightOutlined />
            </div>
          </div>
          <div>
            <div className="payment_fifth_imgpanel">
              <img src={getLocalImg('payment/get.webp')} alt="get" />
            </div>
            <p>
              <T>paymentPage.fifth.text.3</T>
            </p>
          </div>
        </div>
        <div className="payment_fifth_btnpanel">
          <button><T>paymentPage.fifth.button</T></button>
        </div>
      </div>
    </div>
  );
};
