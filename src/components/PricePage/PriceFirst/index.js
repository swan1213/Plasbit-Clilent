
import React from 'react';
import Slider from "react-slick";
import { Card } from '../Card';

import './First.css';

var sliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [
        {
            breakpoint: 1420,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

export const PriceFirst = (props) => {
    return (
        <section className="price_first">
            <h1 className='price_first_title'>PlasBit prices</h1>
            <Slider {...sliderSettings}>
                {props.prices?.map((obj, index) => (
                    <Card key={index} obj={obj} />
                ))}
            </Slider>
        </section>
    )
}