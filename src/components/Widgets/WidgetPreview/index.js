import React, { useState, useEffect } from 'react'
import { Trans as T } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Col, Row, Spin } from 'antd';
import CopyOutlined from '@ant-design/icons/CopyOutlined'
import $ from "jquery";

import { CalculatorWidget } from '../Calculator';
import { CoinListWidget } from '../CoinList';
import { MarqueeWidget } from '../Marquee';
import { ProfitWidget } from '../Profit';

import './style.css';

import { copyToClipboard, useResize } from '../../../utils/helpers';
import { WidgetSelection } from './WidgetSelection';
import { RssWidget } from '../RSS';


const buttonSteps = {
    CALCULATOR: 'CALCULATOR',
    MARQUEE: 'MARQUEE',
    COINLIST: 'COINLIST',
    PROFIT: 'PROFIT',
    RSS: 'RSS'
}

const widgetId = {
    crypto_calculator: 'crypto_calculator',
    crypto_chart: 'crypto_chart',
    crypto_table: 'crypto_table',
    crypto_profit: 'crypto_profit',
    crypto_rss: 'crypto_rss'
}

const widgetLinks = {
    CALCULATOR: 'crypto-calculator',
    CHART: 'crypto-chart',
    TABLE: 'crypto-table',
    PROFIT: 'crypto-profit',
    RSS: 'crypto-rss'
}

export const WidgetPreview = () => {

    const [coins, setCoins] = useState([]);
    const [allowedCoins, setAllowedCoins] = useState([]);
    const [allowedXml, setAllowedXml] = useState([]);
    const [numCards, setNumCards] = useState();
    const [button, setButton] = useState(buttonSteps.CALCULATOR);
    const [copyText, setCopyText] = useState('icon');
    const [theme, setTheme] = useState('linear-gradient(90deg, rgba(115, 114, 114, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(115, 114, 114, 1) 100%)');
    const [textColor, setTextColor] = useState('#ffffff');
    const [buttonColor, setButtonColor] = useState('#0581de');
    const [widgetContainerId, setWidgetContainerId] = useState(widgetId.crypto_calculator);
    const [widgetScriptLink, setWidgetScriptLink] = useState(widgetLinks.CALCULATOR);
    const widgetLink = `<div id="${widgetContainerId}" data-coins="${allowedCoins.map(item => item.symbol)}" data-cards="${numCards}" data-rss="${allowedXml}" data-theme="${theme}" data-text="${textColor}" data-button="${buttonColor}"></div><script src="${process.env.REACT_APP_STORAGE}widget/js/${widgetScriptLink}.js"></script>`
    const { isMobile } = useResize();

    const onChangeTheme = mode => {
        setTheme(mode);
        $('.ant-table-tbody, .ant-table-cell-fix-right, .ant-table-footer').css('background', mode);
        $('.ant-table-thead th').css('background', mode);
        $('.profit-panel').css('background', mode);
    }

    const onChangeTextColor = mode => {
        setTextColor(mode);
        $('.ant-table-tbody div, .ant-table-cell').css('color', mode);
        $('.profit-panel label, .profit-panel div, .profit-panel a, .usd-symbol').css('color', mode);
    }

    const onChangeButtonColor = mode => {
        setButtonColor(mode);
        $('.profit-input-prefix, .special-prefix').css('background', mode);
        $('.profit-input-item input').css('border', `1px solid ${mode}`);
    }

    const onChangeCoins = (mode) => {
        setAllowedCoins(coins.filter(item => mode.includes(item.symbol)));
    };

    const onChangeXML = (mode) => {
        setAllowedXml(mode);
    };

    const onChangeNumCards = (num) => {
        setNumCards(num);
    };

    useEffect(() => {
        if (button !== buttonSteps.RSS) {
            setAllowedXml([]);
            setNumCards('');
        } else {
            setNumCards(3);
        }
    }, [button]);

    var coinData = useSelector(state => state.globalData?.dataSet);
        
    useEffect(() => {
        if (coinData && (button === buttonSteps.MARQUEE || button === buttonSteps.COINLIST)) {
            setCoins(coinData.filter(item => item.symbol !== "ETH2"));
        }else {
            setCoins([]);
            setAllowedCoins([])
        }
    }, [coinData, button]);

    const copySource = (linkToCopy) => {
        copyToClipboard(linkToCopy);
        setCopyText('copied');

        setTimeout(() => {
            setCopyText('icon');
        }, 3000)
    }

if(coinData){
    return (
        <>
        <section className="widget_preview">
            <div className="widget_preview_container row">
            <div className='col-md-12'>
                    <h1 className="main_title widget_preview_title">
                        <span><T>widgetPage.title.0</T> <T>widgetPage.title.1</T></span>
                    </h1>
                    <div className="text text-description">
                        <T>widgetPage.text.0</T> {!isMobile && <br />}
                        <T>widgetPage.text.1</T> {!isMobile && <br />}
                        <T>widgetPage.text.2</T>
                    </div>

                    <div className="widget-button-group">
                        <button type="button" className={"widget-tab-button" + (buttonSteps.CALCULATOR === button ? " widget-tab-active" : "")} onClick={() => {setButton(buttonSteps.CALCULATOR); setWidgetContainerId(widgetId.crypto_calculator);setWidgetScriptLink(widgetLinks.CALCULATOR)}}><h2>Calculator</h2></button>
                        <button type="button" className={"widget-tab-button" + (buttonSteps.MARQUEE === button ? " widget-tab-active" : "")} onClick={() => {setButton(buttonSteps.MARQUEE); setWidgetContainerId(widgetId.crypto_chart);setWidgetScriptLink(widgetLinks.CHART)}}><h2>Price Ticker</h2></button>
                        <button type="button" className={"widget-tab-button" + (buttonSteps.COINLIST === button ? " widget-tab-active" : "")} onClick={() => {setButton(buttonSteps.COINLIST); setWidgetContainerId(widgetId.crypto_table);setWidgetScriptLink(widgetLinks.TABLE)}}><h2>Coin List</h2></button>
                        <button type="button" className={"widget-tab-button" + (buttonSteps.PROFIT === button ? " widget-tab-active" : "")} onClick={() => {setButton(buttonSteps.PROFIT);setWidgetContainerId(widgetId.crypto_profit);setWidgetScriptLink(widgetLinks.PROFIT)}}><h2>Profit Calculator</h2></button>
                        <button type="button" className={"widget-tab-button" + (buttonSteps.RSS === button ? " widget-tab-active" : "")} onClick={() => {setButton(buttonSteps.RSS);setWidgetContainerId(widgetId.crypto_rss);setWidgetScriptLink(widgetLinks.RSS)}}><h2>RSS</h2></button>
                    </div>
                </div>
                <div className='col-md-12'>
                    <Row wrap={isMobile ? true : false} className='widget-preview-main-container'>
                       {isMobile ? 
                            <>
                                {
                                    button === buttonSteps.CALCULATOR && 
                                    <CalculatorWidget theme={theme} textColor={textColor} buttonColor={buttonColor} copySource={copySource} copyText={copyText} CopyOutlined={<CopyOutlined />} />
                                }
                                {
                                    button === buttonSteps.MARQUEE &&
                                    <MarqueeWidget allowedCoins={allowedCoins} theme={theme} textColor={textColor} copySource={copySource} copyText={copyText} CopyOutlined={<CopyOutlined />}/>
                                }
                                {
                                    button === buttonSteps.COINLIST &&
                                    <CoinListWidget allowedCoins={allowedCoins} theme={theme} textColor={textColor} copySource={copySource} copyText={copyText} CopyOutlined={<CopyOutlined />}/>
                                }
                                {
                                    button === buttonSteps.PROFIT &&
                                    <ProfitWidget theme={theme} textColor={textColor} buttonColor={buttonColor} copySource={copySource} copyText={copyText} CopyOutlined={<CopyOutlined />}/>
                                }
                                {
                                    button === buttonSteps.RSS &&
                                    <RssWidget allowedXml={allowedXml} theme={theme} textColor={textColor} numCards={numCards} copySource={copySource} copyText={copyText} CopyOutlined={<CopyOutlined />}/>
                                }
                                <WidgetSelection 
                                    onChangeTheme={onChangeTheme} 
                                    onChangeTextColor={onChangeTextColor} 
                                    onChangeButtonColor={onChangeButtonColor} 
                                    onChangeXML={onChangeXML}
                                    onChangeCoins={onChangeCoins}
                                    onChangeNumCards={onChangeNumCards}
                                    coins={coins}
                                    theme={theme}
                                    textColor={textColor}
                                    buttonColor={buttonColor}
                                    button={button}
                                />
                                    <Col className='copy-text-container' span={12} style={{maxWidth: '100%', marginTop: '15px'}}>
                                        <h3 className='text codeviewer-title mt-3'><T>widgetPage.codeviewer.0</T></h3>
                                        <div className='code'>
                                            <code>
                                                {widgetLink}
                                            </code>
                                            <Button type='light' className='copybutton' onClick={() => copySource(widgetLink)}>{copyText === 'icon' ? <CopyOutlined /> : 'copied'}</Button>
                                        </div>
                                        <p className='codeviewer-text'><T>widgetPage.codeviewer.1</T></p>
                                    </Col>
                            </>
                            : 
                            <>
                                <WidgetSelection 
                                    onChangeTheme={onChangeTheme} 
                                    onChangeTextColor={onChangeTextColor} 
                                    onChangeButtonColor={onChangeButtonColor} 
                                    onChangeCoins={onChangeCoins}
                                    onChangeXML={onChangeXML}
                                    onChangeNumCards={onChangeNumCards}
                                    coins={coins}
                                    theme={theme}
                                    textColor={textColor}
                                    buttonColor={buttonColor}
                                    button={button}
                                />
                                <Row style={{flexDirection: 'column', height: '100%'}}>
                                    {
                                        button === buttonSteps.CALCULATOR && 
                                        <CalculatorWidget theme={theme} textColor={textColor} buttonColor={buttonColor} copySource={copySource} />
                                    }
                                    {
                                        button === buttonSteps.MARQUEE &&
                                        <MarqueeWidget allowedCoins={allowedCoins} theme={theme} textColor={textColor} copySource={copySource} />
                                    }
                                    {
                                        button === buttonSteps.COINLIST &&
                                        <CoinListWidget allowedCoins={allowedCoins} theme={theme} textColor={textColor} copySource={copySource} />
                                    }
                                    {
                                        button === buttonSteps.PROFIT &&
                                        <ProfitWidget theme={theme} textColor={textColor} buttonColor={buttonColor} copySource={copySource}/>
                                    }
                                    {
                                        button === buttonSteps.RSS &&
                                        <RssWidget allowedXml={allowedXml} theme={theme} numCards={numCards} textColor={textColor} copySource={copySource}/>
                                    }
                                    <Col span={12} style={{maxWidth: '100%'}}>
                                        <h3 className='text codeviewer-title mt-3'><T>widgetPage.codeviewer.0</T></h3>
                                        <div className='code'>
                                            <code>
                                                {widgetLink}
                                            </code>
                                            <div className='copybutton' onClick={() => copySource(widgetLink)}>{copyText === 'icon' ? <CopyOutlined /> : 'copied'}</div>
                                        </div>
                                        <p className='codeviewer-text'><T>widgetPage.codeviewer.1</T></p>
                                    </Col>
                                </Row>
                            </>
                        } 
                    </Row>
                </div>
            </div>
        </section>
        </>
    )
} return <Spin/>
}