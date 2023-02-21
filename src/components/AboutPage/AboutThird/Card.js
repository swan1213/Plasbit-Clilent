import React from 'react';

import { getImg } from '../../../utils/helpers';

export const Card = (props) => {
    return (
        <div className="card text_center">
            <img src={getImg(props.card.img)} alt="icon" />
            <div className="title">
                {props.card.title}
            </div>
            <div className="text card_content">
                {props.card.content}
            </div>
        </div>
    )
}