import React from 'react';
import { Image } from 'antd';
import {  imageEmpty } from '../../../../utils/helpers';

import './Card.css';

const CoinIcon = ({ obj }) => {
    return <Image
        className='coin-icon'
        width="34px"
        preview={false}
        fallback={imageEmpty}
        src={obj.image_url}
        alt={`${obj.image_url}`}
    />
}

export const Card = ({ obj, text }) => {
    return (
        <div className="coin_card_slider" style={{color: text, borderRight: `1px solid ${text}`}}>
            <div className="coin-info">
                <div className="icon">
                    <CoinIcon obj={obj} />&nbsp;
                </div>
                <div>
                    <div className="font_20_bold">{obj.name}</div>
                    <div className="font_28_bold">{obj.symbol}</div>
                </div>
            </div>
            <div className="coin-value">
                <div className="font_20_bold text-align-right">{obj.latest ? <span className='usd-symbol'>$</span>:''} {parseFloat(obj.latest).toFixed(2)}</div>
                <div className="font_28_bold text-align-right" style={{ color: parseFloat(obj.percent_change) >= 0 ? 'green' : 'red' }}>{parseFloat(obj.percent_change) >= 0 ? '+' : ''} {parseFloat(obj.percent_change).toFixed(2)}%</div>
            </div>
        </div>
    );
}
