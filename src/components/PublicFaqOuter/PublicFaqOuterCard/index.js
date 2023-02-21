import React from 'react';
import { useHistory } from 'react-router-dom';
import './publicFaqOuterCard.css';

export const PublicFaqOuterCard = ({ faqCard }) => {
  const {
    mainImage, name, desc, route
  } = faqCard;
  const history = useHistory();

  const leadToMiddlePage = () => {
    const path = route ? `/categories/${route}` : '/public-faq';
    history.push({
      pathname: path,
    });
  };

  return (
    <div className="PublicFaq_card hvr-float" role="button" tabIndex="-1" aria-hidden="true" onClick={() => leadToMiddlePage()}>
      <div className="PublicFaq_card_img_container">
        <div className="PublicFaq_card_img_container_inner">
          <div className="PublicFaq_card_img">
            <img src={mainImage} alt="cardimage" className="PublicFaq-img" />
          </div>
        </div>
      </div>
      <div className="PublicFaq_title_card_container">
        <h2 className="PublicFaq_card_title_text">
          {name}
        </h2>
        <div className="PublicFaq_card_p_text">
          {desc}
        </div>
      </div>
    </div>

  );
};
