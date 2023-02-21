import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Trans as T } from "react-i18next";
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Main.css';


export const Main = () => {
    const { isMobile } = useResize()
    const [offsetY, setoffsetY] = useState()
    const handleScroll = () => {
        setoffsetY(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true)
        return () => window.removeEventListener('scroll', handleScroll, true);
    })

    return (
        <section className="main">

            <div id="main_text_0" style={{ display: 'none' }}><T>homePage.main.typewriter.0</T></div>
            <div id="main_text_1" style={{ display: 'none' }}><T>homePage.main.typewriter.1</T></div>
            <div id="main_text_2" style={{ display: 'none' }}><T>homePage.main.typewriter.2</T></div>
            <div id="main_text_3" style={{ display: 'none' }}><T>homePage.main.typewriter.3</T></div>
            <div id="main_text_4" style={{ display: 'none' }}><T>homePage.main.typewriter.4</T></div>
            <div id="main_text_5" style={{ display: 'none' }}><T>homePage.main.typewriter.5</T></div>

            <img className="main_left" src={getLocalImg('webp-images/home-page/main_left.webp')} alt="" />
            <img className="main_right" src={getLocalImg('webp-images/home-page/main_right.webp')} alt="" />
            <div className="container">
                <div className="main_inner">
                    <div className="main_content">
                        <h1 className="main_title">
                            <T>homePage.main.title.0</T> {isMobile ? <br /> : ' '} <T>homePage.main.title.1</T><br />
                            <T>homePage.main.title.2</T>{' '}
                            <span className="type_writer">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(1000)
                                            .typeString(document.querySelector('#main_text_0').innerText)
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(1000)
                                            .typeString(document.querySelector('#main_text_1').innerText)
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(1000)
                                            .typeString(document.querySelector('#main_text_2').innerText)
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(1000)
                                            .typeString(document.querySelector('#main_text_3').innerText)
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(1000)
                                            .typeString(document.querySelector('#main_text_4').innerText)
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(1000)
                                            .typeString(document.querySelector('#main_text_5').innerText)
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                />
                            </span>
                        </h1>
                        <p className="text">
                            <T>homePage.main.text.0</T>
                            <br />
                            <T>homePage.main.text.1</T>
                        </p>
                        <div className="btn_group">
                            <a href={`${process.env.REACT_APP_URL}signup`} className="btn active btn_group_btn"><T>homePage.main.button.0</T></a>
                            <Link to="/cards" className="btn btn_group_btn"><T>homePage.main.button.1</T></Link>
                        </div>
                    </div>
                    <div className="main_img">
                        <LazyLoadImage className="coin_1" style={{ left: `${- offsetY * 0.04}px`, top: `${- offsetY * 0.05}px` }} src={getImg('home/coin-1.svg')} alt="coin" />
                        <LazyLoadImage className="coin_2" style={{ right: `${60 - offsetY * 0.2}px`, top: `${40 - offsetY * 0.03}px` }} src={getImg('home/coin-2.svg')} alt="coin" />
                        <LazyLoadImage className="coin_3" style={{ right: `${-40 - offsetY * 0.04}px`, bottom: `${50 - offsetY * 0.1}px` }} src={getImg('home/coin-3.svg')} alt="coin" />
                        <LazyLoadImage className="coin_4" style={{ left: `${120 - offsetY * 0.06}px`, bottom: `${-30 - offsetY * 0.05}px` }} src={getImg('home/coin-4.svg')} alt="coin" />
                        <LazyLoadImage className="coin_5" style={{ left: `${- offsetY * 0.02}px`, bottom: `${70 - offsetY * 0.03}px` }} src={getImg('home/coin-5.svg')} alt="coin" />

                        <LazyLoadImage className="main_image" style={isMobile ? {width:'360px',height:'294px'} :{width:'538px', height:'439px'}} src={getLocalImg('webp-images/home-page/cards.webp')} alt="cards" />
                    </div>
                </div>
            </div>
        </section>
    );
}
