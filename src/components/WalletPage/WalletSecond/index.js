import React from 'react';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';

import './Second.css';

export const WalletSecond = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_second" id="second" style={{ backgroundImage: `url(${getLocalImg('webp-images/wallet/wallet_second_bg.webp')}` }}>
            <div className="wallet_container">
                <div className="left_side">
                    {!isMobile && <div className="head_title">
                        <img src={getImg('wallet/key.png')} alt="key" /> <span className="text_blue"><T>walletPage.second.security</T></span>
                    </div>}
                    <h2 className="title text_white mobile_title">
                        <T>walletPage.second.title.0</T> <span> <span> <T>walletPage.second.title.1</T> </span> </span>
                    </h2>
                    <div className="text mobile_text">
                        <T>walletPage.second.text.0.0</T><br /> {!isMobile && <><T>walletPage.second.text.0.1</T></>} <br />
                        <T>walletPage.second.text.0.2</T> {!isMobile && <><T>walletPage.second.text.0.3</T></>}
                    </div>
                    <div className="text">
                        <T>walletPage.second.text.1.0</T><br />{!isMobile && <><T>walletPage.second.text.1.1</T></>} <br />
                        <T>walletPage.second.text.1.2</T>
                    </div>
                    <div className="text">
                        <T>walletPage.second.text.2.0</T>{!isMobile && <><T>walletPage.second.text.2.1</T></>} <br />
                        <T>walletPage.second.text.2.2</T>
                    </div>
                    <a href="#fourth" className="btn text_white"><T>walletPage.second.button</T></a>
                </div>
                <div className="right_side">
                    <img src={getLocalImg('webp-images/wallet/wallet_second_right.webp')} alt="second_right" />
                </div>
            </div>
        </section>
    )
}