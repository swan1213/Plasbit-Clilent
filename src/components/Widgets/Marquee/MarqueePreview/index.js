
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Card } from '../Card';

import './First.css';

const sliderSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear"
};

export const MarqueePreview = (props) => {
    const { background, text, prices } = props;
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        let array = prices;

        if (prices.length > 0 && prices.length < 3) {
            while (array.length < 3) {
                array = array.concat(array);
            }
        }

        setCoins(array);
    }, [prices])

    return (
        <div className='marquee_slider' style={{background: background, borderColor: text}}>
            <section className="price_first_marquee" style={{borderColor: text}}>
                {
                    coins.length ? 
                        (<Slider {...sliderSettings}>
                            {coins?.map((obj, index) => (
                                <Card key={index} obj={obj} text={text} />
                            ))}
                        </Slider>) : 
                        <div className='empty-text'><span style={{color: text}}>No selected coins</span></div>
                }
            </section>

            <a className='crypto-join-plasbit marquee-join-plasbit' style={{color: text}} href='https://plasbit.com'>Powered by<div className="plasbit-logo"></div> plasbit.com</a>
        </div>
    )
}