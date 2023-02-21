import React from 'react';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';

import './Third.css';

export const WalletThird = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_third" style={{ backgroundImage: `url(${getImg('wallet/third_bg.png')})` }}>
            <div className="wallet_container">
                {!isMobile && <div className="left_side">
                    <img src={getLocalImg('webp-images/wallet/wallet_third_left_1.webp')} alt="third_left"/>
                </div>}
                <div className="right_side">
                    <h2 className="title">
                        <span><span><T>walletPage.third.title.0</T></span></span> <br />
                        <T>walletPage.third.title.1</T>
                    </h2>
                    <div className="text">
                        <T>walletPage.third.text.0.0</T> {!isMobile && <><T>walletPage.third.text.0.1</T></>}
                    </div>
                    <div className="text">
                        <T>walletPage.third.text.1.0</T> {!isMobile && <><T>walletPage.third.text.1.1</T></>} <br />
                        <T>walletPage.third.text.1.2</T> {!isMobile && <><T>walletPage.third.text.1.3</T></>} <br />
                        <T>walletPage.third.text.1.4</T> {!isMobile && <><T>walletPage.third.text.1.5</T></>}
                    </div>
                    <div className="text">
                        <T>walletPage.third.text.2.0</T> {!isMobile && <><T>walletPage.third.text.2.1</T></>} <br />
                        <T>walletPage.third.text.2.2</T> {!isMobile && <><T>walletPage.third.text.2.3</T></>} <br />
                        <T>walletPage.third.text.2.4</T> {!isMobile && <><T>walletPage.third.text.2.5</T></>}
                    </div>
                </div>
                {isMobile && <div className="left_side mobile">
                    <img src={getLocalImg('webp-images/wallet/wallet_third_left_1.webp')} alt="third_left"/>
                </div>}
            </div>
        </section>
    )
}
