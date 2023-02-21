import React from 'react';
import { getImg } from '../../../utils/helpers';

export const Card = (props) => {
    return (
        <div className="box bg_white text_center">
            <img src={getImg(props.card.img)} alt="icon" />
            <div className="text box_title text_blue">
                {props.card.title}
            </div>
            <div className="box_content">
                {props.card.content}
            </div>
        </div>
    )
}