import React from 'react';
import { Image, Spin } from 'antd';
import { Trans as T } from 'react-i18next';
import TinyArea from '@ant-design/plots/es/components/tiny-area';
import { asNumber, getReversedFilteredArray, imageEmpty } from '../../../utils/helpers';
import './Trend.css';

export const Trend = ({ obj }) => {

    const CoinIcon = ({ val }) => {
        return <Image
            width="34px"
            height="34px"
            preview={false}
            fallback={imageEmpty}
            src={val.image_url}
            alt={`${val.image_url}`}
        />
    }

    const getName = (val) => {
        return val.name
    }

    const getDate = () => {
        let today = new Date();
        let date = today.toLocaleString('default', { month: 'short' }) + ' ' + today.getDate() + ', ' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        return dateTime
    }

    const getPrice = (val) => {

        return asNumber(
            parseFloat(val.latest),
            parseInt(val.unit_price_scale || 5, 10)
        )
    }

    const getPercentage = (val) => {
        return <span>
            {asNumber(
                parseFloat(val.percent_change * 100),
                parseInt(val.unit_price_scale || 5, 10)
            )}%
        </span>
    }

    const PriceGraph = ({ val }) => {
        if(!val) return ''
        return(
            <>
                {TinyArea && <TinyArea
                    syncViewPadding={true}
                    height={80}
                    width={150}
                    smooth={true}
                    autoFit={false}
                    yAxis={{
                        min: parseFloat(val.latest) - (parseFloat(val.latest) *
                            (Math.abs(parseFloat(val.percent_change * 100)) > 10 ? 0.22 : 0.075)),
                        max: parseFloat(val.latest) + (parseFloat(val.latest) *
                            (Math.abs(parseFloat(val.percent_change * 100)) > 10 ? 0.22 : 0.075))
                    }}
                    data={
                        getReversedFilteredArray(val?.prices, 50)
                            ?.map((v) =>
                                asNumber(parseFloat(v), parseInt(val.unit_price_scale || 5, 10))
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

    const getVolume = () => {
        return '0'
    }

    return (
        <div className="home_trend">
            <div className="item">
                <div className="item_top">
                    <CoinIcon val={obj} />
                    <div className="item_top_inner">
                        <span>{getName(obj)}</span>
                        <p>{getDate()}</p>
                    </div>
                </div>
                <div className="item_img">
                    <PriceGraph val={obj} />
                </div>
                <div className="info">
                    <p className="price">${getPrice(obj)}</p>
                    <span style={{
                    backgroundColor: parseFloat(obj.percent_change) >= 0 ? '#18c67f' : '#C93644'
                }}>{getPercentage(obj)}</span>
                </div>
                <a href={`${process.env.REACT_APP_URL}signup`} className="btn slider_btn"><T>homePage.trend.button</T></a>
                <span className="volume"><T>homePage.trend.text</T>: {getVolume(obj)}</span>
            </div>
        </div>
    );
}
