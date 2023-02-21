import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Input, message } from 'antd';
import { CoinList } from './CoinList';
import { CurrencyList } from './CurrencyList';
import $ from 'jquery';
import './style.css';
import { stringToNumber } from '../../../../utils/helpers';

export const ProfitPreview = props => {
    const inputBtc = useRef(null);
    const {background, text, button} = props;
    const [coin, setCoin] = useState('BTC');
    const [coinImage, setCoinImage] = useState();
    const [currency, setCurrency] = useState('USD');
    const [btcPrice, setBtcPrice] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [cryptoIsActive, setCryptoIsActive] = useState(false);
    const [currencySymbol, setCurrencySymbol] = useState('$');

    const [profit, setProfit] = useState({
        totalProfit: 0,
        totalPercent: 0,
        totalInvestment: 0,
        totalExit: 0
    });

    const [state, setState] = useState({
        investment: null,
        initCryptoPrice: null,
        sellCryptoPrice: 50000,
        investmentFee: null,
        exitFee: null,
    });
    

    const livePrice = () => {
        fetch(`https://coinbase.com/api/v2/assets/search?base=${currency}&filter=listed&include_prices=true&resolution=day&sort=rank`)
            .then(res => res.json())
            .then((result) => {
                const data = result.data;
                const price = data.filter(item => item.symbol === coin)[0].latest;
                setState({...state, initCryptoPrice: parseFloat(price).toFixed(2)});
                setCoinImage(data.filter(item => item.symbol === coin)[0].image_url)

                calculatePercent({...state, initCryptoPrice: parseFloat(price).toFixed(2)});
            });
    }

    useEffect(() => {
        livePrice();
    }, [coin, currency])

    useEffect(() => {
        $('.ant-input-group-addon').css('color', text);
        $('.ant-input-group-addon').css('background', button);
    }, [button, text])

    const handleChange = e => {
        setBtcPrice(parseFloat(e.target.value).toFixed(2));

        livePrice(parseFloat(e.target.value).toFixed(2));
    }

    const onChangeCurrency = () => {
        setIsActive(!isActive)
    }

    const onChangeCrypto = () => {
        setCryptoIsActive(!cryptoIsActive)
    }

    const onChangeState = e => {
        if(stringToNumber(e.target.value) < 100000000 && e.target.value[0] !== "-"){
            calculatePercent({...state, [e.target.name]: e.target.value});
            setState({...state, [e.target.name]: e.target.value});
        }else {
            message.error("number must be postive or less than entered")
        }
    }

    const calculatePercent = arr => {
        var invest = parseFloat(arr.investment) ? parseFloat(arr.investment) : 0,
            init_price = parseFloat(arr.initCryptoPrice) ? parseFloat(arr.initCryptoPrice) : 0,
            sell_price = parseFloat(arr.sellCryptoPrice) ? parseFloat(arr.sellCryptoPrice) : 0,
            investment_fee = parseFloat(arr.investmentFee) ? parseFloat(arr.investmentFee) : 0,
            exit_fee = parseFloat(arr.exitFee) ? parseFloat(arr.exitFee) : 0,
            total_percent = 0;

            total_percent = (sell_price / init_price - 1) * 100 - investment_fee - sell_price / init_price * exit_fee;

            setProfit({
                totalProfit: total_percent && invest ? (total_percent * invest / 100).toFixed(1) : 0.0,
                totalPercent: total_percent && invest ? total_percent.toFixed(2) : 0.00,
                totalInvestment: invest ? Math.abs(invest).toFixed(1) : 0.0,
                totalExit:  total_percent && invest ? Math.abs(parseFloat(arr.investment) + total_percent * invest / 100).toFixed(1) : 0.0
            });
    }

    return (
        <>
            <div className='profit-preview' style={{background: background, color: text}}>
                <div className='profit-calculator'>
                    <Row className='profit-calc-container' gutter={[25, 25]}>
                        <Col span={12}>
                            <div className="currency currency_width">
                                <label>Investment Amount</label>
                                <div className="input">
                                    <input type="text" name="investment" style={{border: `2px solid ${button}`}} placeholder='0' value={state.investment || ''} onChange={onChangeState} />
                                    <p className="text suffix" style={{color: text, background: button}} onClick={onChangeCurrency}><span>{currency} &#9660;</span></p>
                                </div>
                                <CurrencyList setCurrency={setCurrency} isActive={isActive} setIsActive={setIsActive} setCurrencySymbol={setCurrencySymbol} />
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="currency currency_width">
                                <label>Choose cryptocurrency</label>
                                <div className="input">
                                    <input type="text" style={{border: `2px solid ${button}`}} ref={inputBtc} value={btcPrice || ''} onInput={handleChange} onClick={onChangeCrypto}/>
                                    <p className="text suffix" style={{color: text, background: button}} onClick={onChangeCrypto}>
                                        <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <img className='option-image' style={{width: 22, height: 22}} src={coinImage} alt="coin-img"/>
                                            &nbsp;
                                            {coin}
                                        </span>
                                    </p>
                                </div>
                                <CoinList coin={coin} text={text} button={button} cryptoIsActive={cryptoIsActive} setCryptoIsActive={setCryptoIsActive} setCoin={setCoin} />
                            </div>
                        </Col>
                        <Col span={12}>
                            <label>Initial crypto price</label>
                            <Input className='profit-input' style={{border: `2px solid ${button}`}} name="initCryptoPrice" placeholder="0" value={state.initCryptoPrice || ''} onChange={onChangeState} addonAfter={currencySymbol} />
                        </Col>
                        <Col span={12}>
                            <label>Selling crypto price</label>
                            <Input className='profit-input' style={{border: `2px solid ${button}`}} name="sellCryptoPrice" placeholder="0" value={state.sellCryptoPrice || ''} onChange={onChangeState} addonAfter={currencySymbol} />
                        </Col>
                        <Col span={12}>
                            <label>Investment Fee</label>
                            <Input className='profit-input' style={{border: `2px solid ${button}`}} name="investmentFee" placeholder="0" value={state.investmentFee || ''} onChange={onChangeState} addonAfter="%" />
                        </Col>
                        <Col span={12}>
                            <label>Exit Fee</label>
                            <Input className='profit-input' style={{border: `2px solid ${button}`}} name="exitFee" placeholder="0" value={state.exitFee || ''} onChange={onChangeState} addonAfter="%" />
                        </Col>
                        <Col span={24}>
                            <div className='profit-font-28'>
                                Investment Result
                            </div>
                            <div className='profit-font-22 mt-3'>Profit / Loss</div>
                            <div className={`${(profit.totalProfit < 0 ? 'font-red' : 'font-green')} amount-container`}>
                                <p id="profit-less-1" className='profit-result-font-bold40'><span style={{marginRight: 5}}>{profit.totalProfit < 0 && '- '}{currencySymbol}</span>{Math.abs(profit.totalProfit) >= 9999999999 ? NaN : Math.abs(profit.totalProfit)}</p>
                                <p id="profit-less-2" className='profit-result-font-bold30'>&nbsp;({Math.abs(profit.totalProfit) >= 9999999999 ? NaN :profit.totalPercent}%)</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='profit-font-22'>Total investment amount</div>
                            <div className='profit-result-font'>{currencySymbol}&nbsp;{profit.totalInvestment}</div>
                        </Col>
                        <Col span={12}>
                            <div className='profit-font-22'>Total exit amount</div>
                            <div className='profit-result-font'>{currencySymbol}&nbsp;{Math.abs(profit.totalProfit) >= 9999999999 ? NaN : profit.totalExit }</div>
                        </Col>
                    </Row>
                    <a className='crypto-join-plasbit' style={{color: text, marginTop: 30}} href='https://plasbit.com'>Powered by<div className="plasbit-logo"></div> plasbit.com</a>
                </div>
            </div>
        </>
    )
}