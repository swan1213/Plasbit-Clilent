import React from 'react';
import { Image, Spin } from 'antd';
import { Trans as T } from 'react-i18next';
import { getImg, asNumber, getReversedFilteredArray, imageEmpty } from '../../../utils/helpers';
import TinyArea from '@ant-design/plots/es/components/tiny-area';
import './Card.css';

const CoinIcon = ({ obj }) => {
    return <Image
        width="34px"
        preview={false}
        fallback={imageEmpty}
        src={obj.image_url}
        alt={`${obj.image_url}`}
    />
}

const getName = (obj) => {
    return obj.name
}

const getPrice = (obj) => {
    return asNumber(
        parseFloat(obj.latest),
        parseInt(obj.unit_price_scale || 5, 10)
    )
}

const PriceGraph = ({ obj }) => {
    if (!obj) return ''
    return (
        <>
            {TinyArea && <TinyArea
                syncViewPadding={true}
                height={80}
                width={300}
                smooth={true}
                autoFit={false}
                yAxis={{
                    min: parseFloat(obj.latest) - (parseFloat(obj.latest) *
                        (Math.abs(parseFloat(obj.percent_change * 100)) > 10 ? 0.22 : 0.075)),
                    max: parseFloat(obj.latest) + (parseFloat(obj.latest) *
                        (Math.abs(parseFloat(obj.percent_change * 100)) > 10 ? 0.22 : 0.075))
                }}
                data={
                    getReversedFilteredArray(obj?.prices, 50)
                        ?.map((v) =>
                            asNumber(parseFloat(v), parseInt(obj.unit_price_scale || 5, 10))
                        ) || []
                }
            />
            }
            {
                !TinyArea && <Spin />
            }
        </>
    )
}

const getPercent = (obj) => {
    const percent = asNumber(
        parseFloat(obj.percent_change * 100),
        parseInt(obj.unit_price_scale || 5, 10)
    )

    if (parseFloat(obj.percent_change) >= 0) return <span className="up_down up"><img src={getImg('dashboard/dashboard/up.png')} alt="dashboard-up-img"/>&nbsp;<span> {percent} %</span></span>
    return <span className="up_down down"><img src={getImg('dashboard/dashboard/down.png')} alt="dashboard-down-img"/>&nbsp;<span> {percent} %</span></span>
}

export const Card = ({ obj }) => {
    return (
        <div className="coin_card">
            <div className="top">
                <div className="icon">
                    <CoinIcon obj={obj} />
                    <div className="font_20 font_bold">{getName(obj)}</div>
                </div>
                <div className="font_28 font_bold">${getPrice(obj)}</div>
            </div>
            <div className="item_img">
                <PriceGraph obj={obj} />
            </div>
            <div className="info">
                <div className="font_20 font_bold">{getPercent(obj)}</div>
                <div className="font_15 font_bold"><T>dashboard.card.text</T></div>
            </div>
        </div>
    );
}
