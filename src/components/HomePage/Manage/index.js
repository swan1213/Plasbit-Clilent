import React from 'react';
import { Link } from 'react-router-dom';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';
import './Manage.css';


export const Manage = () => {
    const { isMobile } = useResize()
    return (
        <section className="manage" style={{ background: `url(${getLocalImg('webp-images/home-page/home_manage.webp')}` }}>
            <div className="container">
                <div className="manage_inner">
                    <div className="manage_content">
                        <h2 className="title manage_title white manage_title">
                            {!isMobile && <>
                                <T>homePage.manage.title.0</T>
                                <span><T>homePage.manage.title.1</T> </span>
                                <T>homePage.manage.title.2</T>
                                <T>homePage.manage.title.3</T></>}
                            {isMobile && <>
                                <T>homePage.manage.titlemobile.0</T> <br />
                                <T>homePage.manage.titlemobile.1</T>
                                <span><T>homePage.manage.titlemobile.2</T> </span>
                                <T>homePage.manage.titlemobile.3</T><br />
                                <T>homePage.manage.titlemobile.4</T></>}
                        </h2>
                        <ul className="text white">
                            <li>
                                <img src={getImg('check.svg')} width='min-content' height='min-content' alt="check" />
                                <T>homePage.manage.text.0</T>
                            </li>
                            <li>
                                <img src={getImg('check.svg')} width='min-content' height='min-content' alt="check" />
                                <T>homePage.manage.text.1</T>
                            </li>
                        </ul>
                        <Link to="/wallet" className="btn"><T>homePage.manage.button</T></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}