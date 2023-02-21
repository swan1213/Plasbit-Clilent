import React, { useEffect, useState } from 'react';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';
import './Transfer.css';


export const Transfer = () => {
    const [offsetY, setoffsetY] = useState()
    const { isMobile } = useResize()
    const handleScroll = () => setoffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <section className="transfer" style={{ backgroundImage: `url(${isMobile ? getImg('home/transfer/bg_mob.jpg') : getLocalImg('webp-images/home-page/home_transfer_bg.webp')})` }}>
            <div className="container">
                <div className="transfer_inner">
                    <div className="transfer_img">
                        <img className="coin_1" style={{ left: `${22 - offsetY * 0.01}%`, top: `${40 - offsetY * 0.02}%` }} src={getLocalImg('webp-images/home-page/home_transfer_coin_1.webp')} alt="coin" />
                        <img className="coin_2" style={{ right: `${73 - offsetY * 0.02}%`, top: `${37 - offsetY * 0.01}%` }} src={getLocalImg('webp-images/home-page/home_transfer_coin_2.webp')} alt="coin" />
                        <img className="coin_3" style={{ right: `${55 - offsetY * 0.02}%`, bottom: `${50 - offsetY * 0.01}%` }} src={getLocalImg('webp-images/home-page/home_transfer_coin_3.webp')} alt="coin" />
                        <img className="coin_4" style={{ left: `${70 - offsetY * 0.01}%`, bottom: `${55 - offsetY * 0.03}%` }} src={getLocalImg('webp-images/home-page/home_transfer_coin_4.webp')} alt="coin" />
                        <img className="coin_5" style={{ left: `${-10 - offsetY * 0.01}%`, bottom: `${30 - offsetY * 0.01}%` }} src={getLocalImg('webp-images/home-page/home_transfer_coin_5.webp')} alt="coin" />
                        <img className="coin_6" style={{ left: `${37 - offsetY * 0.01}%`, bottom: `${54 - offsetY * 0.01}%` }} src={getLocalImg('webp-images/home-page/home_transfer_coin_6.webp')} alt="coin" />

                        <div className="bank_img">
                            <img src={getLocalImg('webp-images/home-page/home_transfer_bank.webp')} alt="cards" />
                            <span className="circle_bg" style={{ background: `center/cover url(${getLocalImg('webp-images/home-page/circle.webp')})` }}></span>
                        </div>
                    </div>
                    <div className="transfer_content">
                        <h2 className="title">
                            <T>homePage.transfer.title.0</T>
                            <span><T>homePage.transfer.title.1</T></span>
                        </h2>
                         <ul className="text">
                             <li>
                                 <img src={getImg('check.svg')} alt="check" />
                                 <T>homePage.transfer.text.0</T>
                             </li>
                             <li>
                                 <img src={getImg('check.svg')} alt="check" />
                                 <T>homePage.transfer.text.1</T>
                             </li>
                         </ul>
                        <div className="btn_group">
                            <a href={`${process.env.REACT_APP_URL}signup`} className="btn active"><T>homePage.transfer.button.0</T></a>
                            <a href="/transfers" className="btn"><T>homePage.transfer.button.1</T></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}