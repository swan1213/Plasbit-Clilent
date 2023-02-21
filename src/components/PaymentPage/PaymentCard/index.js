import React from 'react';
import './Card.css';

export const PaymentCard = (props) => {
  const { icon, title, content } = props.data;
  return (
    <div className="payment_card">
      <div className="icon">
        {icon}
      </div>
      <div className="body">
        <div className="payment_card_font26">{title}</div>
        <div className="payment_card_font20">{content}</div>
      </div>
    </div>
  );
};
