import React from 'react';
import { PublicFaqOuterCard } from '../PublicFaqOuterCard';
import './second.css';

export const PublicFaqOuterSecond = ({ allFaqCards }) => (
  <>
    <div className="PublicFaq_card_container">
      <div className="PublicFaq_card_container_inner">
        <div className="publicFaq_cards_row">
          {allFaqCards?.map((faqCard) => (
            <PublicFaqOuterCard faqCard={faqCard} key={faqCard.id} />
          ))}
        </div>
      </div>
    </div>
  </>
);
