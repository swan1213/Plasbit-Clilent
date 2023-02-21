import React from 'react';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';

import './First.css';

export const WalletFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_first">
            <div className="left_side">
                <img src={getLocalImg('webp-images/wallet/wallet_first_left.webp')} className="left_bg" alt="left_bg" />
                <div >
                    {!isMobile && <h1 className="main_title">
                        <T>walletPage.first.title.0</T>
                        <span>
                            <span>
                                <T>walletPage.first.title.1</T>
                            </span>    
                        </span>
                        <T>walletPage.first.title.2</T> <br />
                        <T>walletPage.first.title.3</T></h1>}
                    {isMobile && <h1 className="main_title">
                        <T>walletPage.first.titleMobile.0</T>
                        <span>
                            <span>
                                <T>walletPage.first.titleMobile.1</T>
                            </span>
                        </span>
                        <T>walletPage.first.titleMobile.2</T> <br />
                        <T>walletPage.first.titleMobile.3</T><br />
                        <T>walletPage.first.titleMobile.4</T></h1>}
                </div>
                {!isMobile && <>
                    <div className="text">
                        <img src={getImg('wallet/check.png')} alt="check" /> <div><T>walletPage.first.text.0.0</T><br /><T>walletPage.first.text.0.1</T><br /><T>walletPage.first.text.0.2</T></div>
                    </div>
                    <div className="text">
                        <img src={getImg('wallet/check.png')} alt="check"/>
                        <div><T>walletPage.first.text.1.0</T> <br /><T>walletPage.first.text.1.1</T></div>
                    </div>
                    <div className="text">
                        <img src={getImg('wallet/check.png')} alt="check"/>
                        <div>
                            <T>walletPage.first.text.2.0</T><br />
                            <T>walletPage.first.text.2.1</T>
                        </div>
                    </div>
                    <div className="wallet_btns">
                        <a href={`${process.env.REACT_APP_URL}signup`} className="btn active"><T>walletPage.first.button.0</T></a>
                        <a href="#second" className="btn"><T>walletPage.first.button.1</T></a>
                    </div>
                </>}
            </div>
            <div className="right_side">
                {!isMobile && <img src={getLocalImg('webp-images/wallet/first_right.webp')} alt="first_right"/>}
                {isMobile && <img src={getImg('wallet/first_mobile.png')} alt="first_mobile"/>}
            </div>
            {isMobile &&
                <a href={`${process.env.REACT_APP_URL}signup`} className="btn active"><T>walletPage.first.button.0</T></a>
            }
        </section>
    )
}