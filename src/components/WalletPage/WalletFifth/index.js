import React from 'react';
import { Trans as T } from 'react-i18next';
import { useResize, getImg } from '../../../utils/helpers';

import './Fifth.css';

export const WalletFifth = () => {

    const { isMobile } = useResize()

    return (
        <section className="wallet_fifth text_center">
            {!isMobile && <div className="title">
                <T>walletPage.fifth.title.0</T><span><span><T>walletPage.fifth.title.1</T></span></span>
            </div>}
            <div className="step_container">
                <div className="step">
                    <img src={getImg('wallet/step-1.png')} alt="" />
                    <p className="text"><T>walletPage.fifth.step.0</T></p>
                </div>
                <div className="dot">
                    <img src={getImg('wallet/dot.png')} alt="" />
                </div>
                <div className="step">
                    <img src={getImg('wallet/step-2.png')} alt="" />
                    <p className="text">
                        <T>walletPage.fifth.step.1</T><br />
                        <T>walletPage.fifth.step.2</T>
                    </p>
                </div>
                <div className="dot">
                    <img src={getImg('wallet/dot.png')} alt="" />
                </div>
                <div className="step">
                    <img src={getImg('wallet/step-3.png')} alt="" />
                    <p className="text"><T>walletPage.fifth.step.3</T></p>
                </div>
            </div>
            <a href={`${process.env.REACT_APP_URL}signup`} className="btn active"><T>walletPage.fifth.button</T></a>
        </section>
    )
}
