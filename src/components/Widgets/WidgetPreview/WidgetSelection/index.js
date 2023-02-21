import { Col, Select } from "antd";
import React, { useState, useEffect } from "react";
import { pageType, useResize } from "../../../../utils/helpers";
import { useSelector } from 'react-redux';

const buttonSteps = {
    CALCULATOR: 'CALCULATOR',
    MARQUEE: 'MARQUEE',
    COINLIST: 'COINLIST',
    PROFIT: 'PROFIT',
    RSS: 'RSS',
}

const { Option } = Select;

const backGroundColors = [
    { name: 'Transparent', color: 'transparent' },
    { name: 'Black', color: 'linear-gradient(90deg, rgba(115, 114, 114, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(115, 114, 114, 1) 100%)' },
    { name: 'Silver', color: 'linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(120,119,119,1) 50%, rgba(217,217,217,1) 100%)' },
    { name: 'Gold', color: 'linear-gradient(90deg, rgb(170, 119, 28) 0%, rgb(252, 246, 186) 25%, rgb(179, 135, 40) 49%, rgb(251, 245, 183) 75%, rgb(170, 119, 28) 100%)' },
    { name: 'Green', color: 'linear-gradient(90deg, rgba(29,168,50,1) 0%, rgba(23,120,12,1) 50%, rgba(29,168,50,1) 100%)' },
    { name: 'Ruby Red', color: 'linear-gradient(90deg, rgba(182,69,69,1) 0%, rgba(142,32,32,1) 50%, rgba(182,69,69,1) 100%)' },
    { name: 'Blue', color: ' linear-gradient(90deg, rgba(0,121,189,1) 0%, rgba(0,0,113,1) 50%, rgba(0,121,189,1) 100%)' },
    { name: 'White', color: '#ffffff' }
]

const colors = [
    { name: 'Transparent', color: 'transparent' },
    { name: 'Black', color: '#1a1c1b' },
    { name: 'Silver', color: '#b4b4b4' },
    { name: 'Gold', color: '#e4b54b' },
    { name: 'Green', color: '#0b9000' },
    { name: 'Ruby Red', color: '#b11941' },
    { name: 'Blue', color: '#0581de' },
    { name: 'White', color: '#ffffff' }
]

const numbers = [1, 2, 3, 4, 5]

export const WidgetSelection = (props) => {
    const { 
        onChangeCoins, 
        onChangeTheme, 
        onChangeTextColor, 
        onChangeButtonColor, 
        button, 
        coins, 
        theme, 
        textColor, 
        onChangeXML, 
        buttonColor, 
        onChangeNumCards} = props
    const { isMobile, width } = useResize();
    const [number, setNumber] = useState(12);
    const [numXML, setNumXML] = useState(3)
    
    const colorOptions = colors?.map((item, index) => {
        return <Option key={index} value={item.color}>{item.name}</Option>;
    })

    const backGroundColorOptions = backGroundColors?.map((item, index) => {
        return <Option key={index} value={item.color} defaultValue='asdfg'>{item.name}</Option>;
    })

    const xmlTitle = useSelector(state => state.routePages.pages)
    .filter((page) => page.type === pageType.RSS).map((item) => item)

    const xmlOptions = xmlTitle?.map((item,index) => {
        return <Option key={index} value={item.name}>{item.name}</Option>
    })

    const numCardsOptions = numbers?.map((num, index) => {
        return <Option key={index} value={num}>{num}</Option>
    }) 

    useEffect(() => {
      if (button === buttonSteps.RSS) {
          if (numXML === 5 && !isMobile) {
              setNumber(5);
          } else if (numXML === 4 && !isMobile) {
              if (width < 1500 && width > 1240) {
                  setNumber(5);
              }
              setNumber(8);
          } else {
              setNumber(isMobile ? 24 : 12);
          }
      } else {
          setNumber(isMobile ? 24 : 12);
          setNumXML(3);
      }
    }, [numXML, button, width]);

    return (
        <Col className="widget-container" span={number} style={ button === buttonSteps.RSS ? {marginTop: '15px',transition: "all 0.7s ease-in-out"} : {marginTop: '15px'}}>
            <div>
                {
                    (button === buttonSteps.MARQUEE || button === buttonSteps.COINLIST) && 
                    <div className='control-mb-5'>
                        <div className='text codeviewer-title mt-3 mb-7' htmlFor="coin">Add Coin</div>
                        <Select className='widget-control' mode='multiple' size='large' id='coin' onChange={val => onChangeCoins(val)}>
                            {
                                coins?.map((item, index) => {
                                    return <Option className='coin-select-items' key={index} value={item.symbol}><img className='coin-select-image' src={item.image_url} alt="item-img-url"/>{item.name}&nbsp; {item.symbol}</Option>
                                })
                            }
                        </Select>
                    </div>
                }
                {
                    button === buttonSteps.RSS &&
                    <>
                        <div className='control-mb-5'>
                            <div className='text codeviewer-title mt-3 mb-7' htmlFor="xml">Add RSS Resource</div>
                            <Select className='widget-control' mode='multiple' size='large' id='xml' onChange={val => onChangeXML(val)}>
                                {xmlOptions}
                            </Select>
                        </div>
                        <div className='control-mb-5'>
                            <div className='text codeviewer-title mt-3 mb-7' htmlFor="numCards">Number of displayed cards</div>
                            <Select className='widget-control' size='large' id='numCards' defaultValue={numXML} onChange={val => (onChangeNumCards(val), setNumXML(val))}>
                                {numCardsOptions}
                           </Select>
                        </div>  
                    </>
                    
                }
                <div className='position-relative'>
                    <div className='text codeviewer-title mt-3' htmlFor="theme">Background Color</div>
                    <Select className='widget-control' size='large' id='theme' defaultValue={theme} role='combobox' aria-expanded="false" aria-labelledby="background-color" onChange={val => onChangeTheme(val)}>
                        {backGroundColorOptions}
                    </Select>
                </div>
                <div className='control-mt-5'>
                    <div className='text codeviewer-title mt-3' htmlFor="textColor">Text Color</div>
                    <Select className='widget-control' size='large' id='textColor' defaultValue={textColor} role='combobox' aria-expanded="false" aria-labelledby="text-color" onChange={val => onChangeTextColor(val)}>
                        {colorOptions}
                    </Select>
                </div>
                {
                    (button === buttonSteps.CALCULATOR || button === buttonSteps.PROFIT) &&
                    <div className='control-mt-5'>
                        <div className='text codeviewer-title mt-3' htmlFor="buttonColor">Buttons Color</div>
                        <Select className='widget-control' size='large' id='buttonColor' defaultValue={buttonColor} role='combobox' aria-expanded="false" aria-labelledby="color-option" onChange={val => onChangeButtonColor(val)}>
                            {colorOptions}
                        </Select>
                    </div>
                }
            </div>
        </Col>
    )
}