import React from 'react';
import { Row, Col } from 'antd';
import { PaymentCard } from '../PaymentCard';
import { Trans as T } from 'react-i18next';
import './Forth.css';
import { getLocalImg } from '../../../utils/helpers';

const cards = [
  { title: <T>paymentPage.forth.card_title.0</T>, content: <T>paymentPage.forth.text.0</T>, icon: <img src={getLocalImg('payment/coins.webp')} alt="coins" /> },
  { title: <T>paymentPage.forth.card_title.1</T>, content: <T>paymentPage.forth.text.1</T>, icon: <img src={getLocalImg('payment/fees.webp')} alt="fees" /> },
  { title: <T>paymentPage.forth.card_title.2</T>, content: <T>paymentPage.forth.text.2</T>, icon: <img src={getLocalImg('payment/payouts.webp')} alt="payouts" /> },
  { title: <T>paymentPage.forth.card_title.3</T>, content: <T>paymentPage.forth.text.3</T>, icon: <img src={getLocalImg('payment/account.webp')} alt="account" /> },
];

export const PaymentForth = () => (
  <div className="payment_forth">
    <div className="payment_forth_container">
      <Row justify="center">
        <Col span={24}>
          <div className="payment_forth_font81">
            <T>paymentPage.forth.title.0</T>
            <span>
              <T>paymentPage.forth.title.1</T>
            </span>
            <T>paymentPage.forth.title.2</T>
          </div>
        </Col>
        {
        cards.map((item, index) => (
          <Col key={index} xxl={6} md={12} sm={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PaymentCard data={item} />
          </Col>
        ))
         }
      </Row>
    </div>
  </div>
);
