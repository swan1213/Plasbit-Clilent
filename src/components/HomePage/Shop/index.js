import React from 'react';
import { Link } from 'react-router-dom';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';
import './Shop.css';

export const Shop = () => {
    const { isMobile } = useResize()
    return (
        <section className="shop">
            <div className="container">
                <div className="shop_inner">
                    <div className="shop_img">
                        <img src={getLocalImg('webp-images/home-page/home-shop.webp')} alt="woman" />
                    </div>
                    <div className="shop_content">
                        <h2 className="title">
                            <span><T>homePage.shop.title.0</T> </span>{isMobile ? <br /> : ' '}
                            <T>homePage.shop.title.1</T> {isMobile ? <br /> : ' '}
                            <T>homePage.shop.title.2</T>
                        </h2>
                        <ul className="text">
                            <li>
                                <img src={getImg('check.svg')} alt="check" />
                                <T>homePage.shop.text.0</T> <br />
                            </li>
                            <li>
                                <img src={getImg('check.svg')} alt="check" />
                                <T>homePage.shop.text.1</T>
                            </li>
                        </ul>
                        <Link to="/cards" className="btn"><T>homePage.shop.button</T></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}