import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Trans as T } from 'react-i18next';
import { useResize, Colors, asNumber } from '../../../utils/helpers';

import { Chart } from './Chart';
import './Second.css';

export const CalcSecond = () => {

    const { isMobile } = useResize()
    const [period, setPeriod] = useState("day")
    const [priceHistory, setPriceHistory] = useState([])
    const dataSet = useSelector(state => state.globalData?.dataSet)
    const btcPrice = dataSet?.[0].latest

    const livePrice = () => {
            fetch(`https://api.coinbase.com/v2/prices/BTC-USD/historic?period=${period}`)
            .then(res => res.json())
            .then((result) => {
                const data = result.data;
                const prices = data.prices;  
                prices.sort((a, b) =>
                    (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
                prices.map((obj) => (
                    obj.time = formatDate(obj.time)
                ))
                setPriceHistory(prices);
            })
    }
    useEffect(() => {
        livePrice()
    }, [period])

    const formatDate = (e) => {
        const dates = new Date(e);
        const year = dates.getFullYear();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[dates.getMonth()];
        const date = dates.getDate();
        const hour = dates.getHours();
        const minute = "0" + dates.getMinutes();
        const second = "0" + dates.getSeconds();

        const formattedDate = date + ' ' + month + ' ' + year;
        const formattedTime = hour + ':' + minute.substr(-2) + ':' + second.substr(-2);

        if (period === "day") return formattedTime;
        if (period === "year") return formattedDate;
        return formattedDate + " " + formattedTime;
    }

    const getPercentage = (dataSet) => {
        return <span style={parseFloat(dataSet?.percent_change) >= 0 ?
            { color: Colors.GREEN, borderColor: Colors.GREEN } : {
                color: Colors.RED, borderColor: Colors.RED
            }}>
            {asNumber(
                parseFloat(dataSet?.percent_change * 100),
                parseInt(dataSet?.unit_price_scale || 5, 10)
            )} %
        </span>
    }

    const handelPeriod = (e) => {
        setPeriod(e.target.value)
    }
    return (
        <section className="calculator_second">
            <div className="title text_center">
                <T>calcPage.second.text.0</T> <span><span><T>calcPage.second.text.1</T></span></span> {isMobile && <br />} <T>calcPage.second.text.2</T> <span className="text"><span><T>calcPage.second.text.3</T></span></span>
            </div>
            <div className="sub_title">
                <span className="text">{btcPrice}USD </span>
                <span className="text percent">{getPercentage(dataSet?.[0])}</span>
            </div>
            <div className="chart">
                <div className="chart_title">
                    <div className="help_title"><T>calcPage.second.title</T></div>
                    {!isMobile && <div className="time">
                        <span className={`text ${period === "day" ? "active" : ""}`} onClick={() => setPeriod("day")}>24h</span>
                        <span className={`text ${period === "week" ? "active" : ""}`} onClick={() => setPeriod("week")}>1w</span>
                        <span className={`text ${period === "month" ? "active" : ""}`} onClick={() => setPeriod("month")}>1m</span>
                        <span className={`text ${period === "year" ? "active" : ""}`} onClick={() => setPeriod("year")}>1y</span>
                    </div>}
                    {isMobile && <>
                        <select className="text time" value={period} onChange={handelPeriod}>
                            <option value="day">24h</option>
                            <option value="week">1w</option>
                            <option value="month">1m</option>
                            <option value="year">1y</option>
                        </select>
                        <i className="arrow right" />
                    </>}
                </div>
                <Chart priceHistory={priceHistory} />
            </div>
        </section>
    )
}
