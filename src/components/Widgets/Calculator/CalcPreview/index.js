import React, { useRef, useEffect, useState } from 'react';
import { CoinList } from './CoinList';
import { CurrencyList } from './CurrencyList';
import { Trans as T } from 'react-i18next';
import { useResize, setInputFilter } from '../../../../utils/helpers';

import './CalcPreviewStyle.css';

export const CalcPreview = props => {
    const { background, text, button } = props;
    const { isMobile } = useResize()
    const inputBtc = useRef(null);
    const [coin, setCoin] = useState('BTC');
    const [currency, setCurrency] = useState('USD');
    const [btcPrice, setBtcPrice] = useState(1);
    const [btcValue, setBtcValue] = useState(0.00);
    const [isActive, setIsActive] = useState(false);
    const [isCoinActive, setIsCoinActive] = useState(false);

    const livePrice = (val) => {
        fetch(`https://coinbase.com/api/v2/assets/search?base=${currency}&filter=listed&include_prices=true&resolution=day&sort=rank`)
            .then(res => res.json())
            .then((result) => {
                const data = result.data;
                const price = data.filter(item => item.symbol === coin)[0].latest;
                setBtcValue(parseFloat(price*val).toFixed(2));
            });
    }

    useEffect(() => {
        livePrice(btcPrice);
    }, [coin, currency])

    useEffect(() => {
        setInputFilter(inputBtc.current, function (value) {
            return /^-?\d*[.,]?\d*$/.test(value)
        });
    }, [])

    const handleChange = e => {
        setBtcPrice(e.target.value);

        livePrice(e.target.value);
    }

    return (
        <div className="calc_preview">
            <div className='calculator' style={{background: background, borderColor: button}}>
                <div className="card">
                    <div className="currency currency_width">
                        <div className="text label text_blue" style={{color: text}}>
                            <T>calcPage.first.label.0</T>
                        </div>
                        <div className="input mt-10">
                            <input type="text" style={{border: `2px solid ${button}`}} ref={inputBtc} value={btcPrice} onInput={handleChange} />
                            <p className="text suffix" style={{color: text, background: button}} onClick={() => setIsCoinActive(!isCoinActive)}><span>{coin} &#9660;</span></p>
                        </div>
                        <CoinList setCoin={setCoin} isActive={isCoinActive} setIsActive={setIsCoinActive} />
                    </div>
                    {!isMobile && <div className="text_white">=</div>}
                    {isMobile && <div className="mobile-equal text_white">=</div>}
                    <div className="currency currency_width">
                        <div className="label text label text_blue" style={{color: text}}>
                            <T>calcPage.first.label.1</T>
                        </div>
                        <div className="input mt-10">
                            <input type="text" style={{border: `2px solid ${button}`}} value={btcValue} disabled />
                            <p className="text suffix" style={{color: text, background: button}} onClick={() => setIsActive(!isActive)}><span>{currency} &#9660;</span></p>
                        </div>
                        <CurrencyList setCurrency={setCurrency} isActive={isActive} setIsActive={setIsActive} />
                    </div>
                </div>

                <a className='crypto-join-plasbit' href='https://plasbit.com' style={{color: text}}>Powered by<div className="plasbit-logo"></div> plasbit.com</a>
            </div>
        </div>
    )
}


