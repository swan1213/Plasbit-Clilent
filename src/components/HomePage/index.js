import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { Trans as T } from "react-i18next";
import { siteCanonical, siteDescriptions, siteTitles, useResize } from '../../utils/helpers';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { Main } from './Main';
import { Store } from './Store';
import { Manage } from './Manage';
import { Transfer } from './Transfer';
import { Shop } from './Shop';
import { Trend } from './Trend';
import "slick-carousel/slick/slick.css";
import { Help } from './Help';


export const HomePage = () => {

    const { isMobile } = useResize();
    const [tickerData, setTickerData] = useState();
    const dataSet = useSelector(state => state.globalData?.dataSet);

    const sliderSettings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1420,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

    useEffect(() => {
        if (dataSet && Array.isArray(dataSet)) {
          let res = [];
          dataSet.sort(
            (a, b) =>
              a.market_cap &&
              b.market_cap &&
              parseFloat(a.market_cap) > parseFloat(b.market_cap)
          );
          let i = 0;
          while (res.length < 16) {
            if (
              dataSet[i] &&
              dataSet[i]?.base?.toLowerCase()
                .indexOf('eth2') < 0 &&
              dataSet[i]?.base?.toLowerCase()
                .indexOf('usdt') < 0 &&
              dataSet[i]?.base?.toLowerCase()
                .indexOf('bnb') < 0
            ) {
              res.push({
                ...dataSet[i],
                key: dataSet[i].base,
              });
            }
            i++;
          }
    
          setTickerData(res);
        }
      }, [dataSet]);

    return (
      <>
      
        <CustomHelmet title={siteTitles.home} description={siteDescriptions.home} canonical={siteCanonical.home} />

        <div className="App">
            <main>
                <Main />
                <Store />
                <Manage />
                <Transfer />
                <Shop />
            <section className="trend">
                <div className="trend_inner">
                    <div className="container">
                    <div className="trend_top">
                        <h2 className={`title ${isMobile ? 'text_center' : ''}`}>
                        <T>homePage.trend.title.0</T> <span><T>homePage.trend.title.1</T></span>
                        </h2>
                    </div>
                    </div>
                    <Slider {...sliderSettings} className="trend_slider">
                    {tickerData && tickerData.map((obj, index) => (
                        <Trend key={index} obj={obj} />
                    ))}
                    </Slider>
                </div>
            </section>
            </main>
            <Help />
        </div>
        </>
    );

};
