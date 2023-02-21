
import React from 'react'
import { Trans as T } from 'react-i18next';

import './Fourth.css'
import { getImg } from '../../../utils/helpers';


export const TransferFourth = () => {

    return (
        <section className="transfer_fourth text_center mt_30">

            <div className="title">
                <T>transfersPage.sixth.title</T>
            </div>
            <div className="steps">
                <div className="step text_center">
                    <img src={getImg('transfers/account.png')} alt="account-img" />
                    <div className="font_25 font_bold mt_50">
                        <T>transfersPage.sixth.steps.0.title</T>
                    </div>
                    <div className="font_15 font_bold mt_30">
                        <T>transfersPage.sixth.steps.0.text</T>
                    </div>
                </div>
                <div className="mt_30">
                    <div className="myarrow">
                        <span className="arrow left"></span>
                        <span className="line"></span>
                        <span className="arrow right"></span>
                    </div>
                </div>
                <div className="step text_center">
                    <img src={getImg('transfers/details.png')} alt="details-img" />
                    <div className="font_25 font_bold mt_50">
                        <T>transfersPage.sixth.steps.1.title</T>
                    </div>
                    <div className="font_15 font_bold mt_30">
                        <T>transfersPage.sixth.steps.1.text</T>
                    </div>
                </div>
                <div className="mt_30">
                    <div className="myarrow">
                        <span className="arrow left"></span>
                        <span className="line"></span>
                        <span className="arrow right"></span>
                    </div>
                </div>
                <div className="step text_center">
                    <img src={getImg('transfers/confirm.png')} alt="confirm-img" />
                    <div className="font_25 font_bold mt_50">
                        <T>transfersPage.sixth.steps.2.title</T>
                    </div>
                    <div className="font_15 font_bold mt_30">
                        <T>transfersPage.sixth.steps.2.text</T>
                    </div>
                </div>
            </div>
            <a href={`${process.env.REACT_APP_URL}signup`} className="btn active mt_50 ml_auto mr_auto"><T>transfersPage.sixth.button</T></a>
        
        </section>
    )
}