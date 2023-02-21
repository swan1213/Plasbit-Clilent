
import React from 'react';

import './Card.css';
import { getImg } from '../../../utils/helpers';

export const Card = (props) => {

    return (
        <div className="transfer_card">
            <img src={getImg(props.card.img)} alt="card-img" />
            <div className="right ml_20">
                <div className="font_25 font_bold light_blue">
                    {props.card.title}
                </div>
                <div className="text mt_10">
                    {props.card.text}
                </div>
            </div>
        </div>
    )
}