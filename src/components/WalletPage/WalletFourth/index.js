import React from 'react';
import { Trans as T } from 'react-i18next';
import { useResize, getImg, getLocalImg } from '../../../utils/helpers';

import './Fourth.css';

export const WalletFourth = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_fourth" id="fourth" style={{ backgroundImage: `url(${getLocalImg('webp-images/wallet/wallet_fourth_bg.webp')}` }}>
            <div className="wallet_container">
                <div className="left_side">
                    <h2 className="title text_white mobile_center">
                        <T>walletPage.fourth.title.0</T>{isMobile && <br />}<span><span><T>walletPage.fourth.title.1</T></span></span>
                    </h2>
                    <div className="text mobile_center">
                        <T>walletPage.fourth.subTitle.0</T> {!isMobile && <><T>walletPage.fourth.subTitle.1</T></>} <br />
                        <T>walletPage.fourth.subTitle.2</T>
                    </div>
                    <div className="content_container">
                        <img src={getImg('check.svg')} alt="check"/>
                        <div className="sub_container">
                            <div className="sub_title text_blue">
                                <T>walletPage.fourth.line_1.title</T>
                            </div>
                            <div className="text">
                                <T>walletPage.fourth.line_1.text.0</T> <br />
                                <T>walletPage.fourth.line_1.text.1</T> {!isMobile && <br />}
                                <T>walletPage.fourth.line_1.text.2</T>
                            </div>
                        </div>
                    </div>
                    <div className="content_container">
                        <img src={getImg('check.svg')} alt="check"/>
                        <div className="sub_container">
                            <div className="sub_title text_blue">
                                <T>walletPage.fourth.line_2.title</T>
                            </div>
                            <div className="text">
                                <T>walletPage.fourth.line_2.text.0</T><br />{isMobile ? '' : <T>walletPage.fourth.line_2.text.1</T>} <br />
                                <T>walletPage.fourth.line_2.text.2</T><br />
                                <T>walletPage.fourth.line_2.text.3</T><br />
                                <T>walletPage.fourth.line_2.text.4</T><br />
                            </div>
                        </div>
                    </div>
                    <div className="content_container">
                        <img src={getImg('check.svg')} alt="check"/>
                        <div className="sub_container">
                            <div className="sub_title text_blue">
                                <T>walletPage.fourth.line_3.title</T>
                            </div>
                            <div className="text">
                                <T>walletPage.fourth.line_3.text.0</T> {isMobile ? '' : <T>walletPage.fourth.line_3.text.1</T>},<br />
                                <T>walletPage.fourth.line_3.text.2</T> {isMobile ? '' : <T>walletPage.fourth.line_3.text.3</T>} <br />
                                <T>walletPage.fourth.line_3.text.4</T> {isMobile ? '' : <T>walletPage.fourth.line_3.text.5</T>}
                            </div>
                        </div>
                    </div>
                </div>
                {!isMobile && <div className="right_side">
                    <img src={getLocalImg('webp-images/wallet/wallet_fourth_right.webp')} alt="fourth_right"/>
                </div>}
            </div>
        </section>
    )
}