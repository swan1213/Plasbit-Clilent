import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';
import './Store.css';


export const Store = () => {
    const { isMobile } = useResize()
    return (
        <section className="store">

            <div id="store_text_0" style={{ display: 'none' }}><T>homePage.store.typewriter.0</T></div>
            <div id="store_text_1" style={{ display: 'none' }}><T>homePage.store.typewriter.1</T></div>
            <div id="store_text_2" style={{ display: 'none' }}><T>homePage.store.typewriter.2</T></div>

            <div className="container">
                <div className="store_inner">
                    <div className="store_img">
                        <img src={getLocalImg('webp-images/home-page/home-store.webp')} alt="plasbit" />
                        <span className="store_bg" style={{ background: `center/cover url(${getImg('home/dots.svg')})` }}></span>
                    </div>
                    <div className="store_content">
                        <h2 className="title store_title">
                            <span><T>homePage.store.title.0</T>{isMobile ? <br /> : ' '}</span>
                            <span><T>homePage.store.title.1</T> {' '}</span>
                            <span>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString(document.querySelector('#store_text_0').innerText)
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString(document.querySelector('#store_text_1').innerText)
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString(document.querySelector('#store_text_2').innerText)
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                />
                            </span>
                        </h2>
                        <ul className="text">
                            <li>
                                <img src={getImg('check.svg')} alt="check" />
                                <T>homePage.store.text.0</T>
                            </li>
                            <li>
                                <img src={getImg('check.svg')} alt="check" />
                                <T>homePage.store.text.1</T>
                            </li>
                        </ul>
                        <div className="btn_group">
                            <a href={`${process.env.REACT_APP_URL}signup`} className="btn active"><T>homePage.store.button.0</T></a>
                            <Link to="/wallet" className="btn"><T>homePage.store.button.1</T></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
