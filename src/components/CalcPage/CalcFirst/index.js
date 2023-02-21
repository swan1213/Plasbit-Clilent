import React, { useRef, useEffect, useState } from 'react';
import { CurrencyList } from './CurrencyList';
import { Trans as T } from 'react-i18next';
import { useResize, setInputFilter, getLocalImg } from '../../../utils/helpers';

import './First.css';

export const CalcFirst = () => {

    const { isMobile } = useResize()
    const img = useRef(null);
    const inputBtc = useRef(null);
    const [currency, setCurrency] = useState('USD');
    const [btcPrice, setBtcPrice] = useState(0);
    const [btcValue, setBtcValue] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const livePrice = () => {
        fetch(`https://api.coinbase.com/v2/prices/spot?currency=${currency}`)
            .then(res => res.json())
            .then((result) => {
                const data = result.data;
                setBtcPrice(data.amount)
            })
    }

    useEffect(() => {
        livePrice()
    }, [currency])

    useEffect(() => {
        setInputFilter(inputBtc.current, function (value) {
            return /^-?\d*[.,]?\d*$/.test(value)
        });
    }, [])

    useEffect(() => {
        handleBtcAmount();
        const offset = isMobile ? 0 : (window.innerWidth < 1650 ? 230 : 10)
        img.current.style.marginLeft = `-${window.innerWidth / 2 + offset}px`
    });

    const handleBtcAmount = () => {
        const amount = inputBtc.current.value;
        setBtcValue(parseFloat(amount * btcPrice).toFixed(2))
    }

    return (
        <section className="calculator_first">
            <img src={getLocalImg('calc_first_bg.avif')} ref={img} alt="first_bg"/>
            <div className="calculator_container">
                <h1 className="main_title text_white">
                    <T>calcPage.first.title.0</T> <span><span><T>calcPage.first.title.1</T></span></span>
                </h1>
                <div className="text text_white">
                    <T>calcPage.first.text.0</T> {!isMobile && <br />}
                    <T>calcPage.first.text.1</T> {!isMobile && <br />}
                    <T>calcPage.first.text.2</T>
                </div>
                <div className="card">
                    <div className="bitcoin">
                        <div className="text label text_blue">
                            <T>calcPage.first.label.0</T>
                        </div>
                        <div className="input">
                            <input type="text" defaultValue="1" ref={inputBtc} onChange={handleBtcAmount} />
                            <div className="text suffix">BTC</div>
                            {isMobile && <div className="text_white">=</div>}
                        </div>
                    </div>
                    {!isMobile && <div className="text_white">=</div>}
                    <div className="currency currency_width">
                        <div className="text label text_blue">
                            <T>calcPage.first.label.1</T>
                        </div>
                        <div className="input">
                            <input type="text" value={btcValue} disabled />
                            <p className="text suffix" onClick={() => setIsActive(!isActive)}><span>{currency} &#9660;</span></p>
                        </div>
                        <CurrencyList setCurrency={setCurrency} isActive={isActive} setIsActive={setIsActive} />
                        <div className="text bottom">
                            <span className={(currency === "USD") ? "active" : ""} onClick={() => { setCurrency("USD") }}>USD</span>
                            <span className={(currency === "EUR") ? "active" : ""} onClick={() => { setCurrency("EUR") }}>EUR</span>
                            <span className={(currency === "GBP") ? "active" : ""} onClick={() => { setCurrency("GBP") }}>GBP</span>
                            <span className={(currency === "NGN") ? "active" : ""} onClick={() => { setCurrency("NGN") }}>NGN</span>
                            <span className={(currency === "CNY") ? "active" : ""} onClick={() => { setCurrency("CNY") }}>CNY</span>
                            <span className={(currency === "JPY") ? "active" : ""} onClick={() => { setCurrency("JPY") }}>JPY</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


