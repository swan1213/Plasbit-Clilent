
import React from 'react'
import { Trans as T } from 'react-i18next';

import './First.css';
import { getImg, getLocalImg, useResize } from '../../../utils/helpers';


export const TransferFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="transfer_first"
            style={isMobile ? { backgroundImage: `url(${getImg('transfers/first_bg_mob.png')})` }
                : { backgroundImage: `url(${getImg('transfers/first_bg.png')})` }}>
            <div className="transfer_container">
                <div className="left mt_50">
                    <h1 className="text_white main_title mb_0">
                        <T>transfersPage.first.title.0</T>
                        {' '}
                        <span><span><T>transfersPage.first.title.1</T></span></span>
                        {' '}
                        <T>transfersPage.first.title.2</T>
                    </h1>
                    <div className="text white">
                        <T>transfersPage.first.text.0</T><br/>
                        <T>transfersPage.first.text.1</T><br/>
                        <T>transfersPage.first.text.2</T>
                    </div>
                    <div className="transfer_btns text_center mt_50">
                        <a href={`${process.env.REACT_APP_URL}signup`} className="btn active"><T>transfersPage.first.button.0</T></a>
                        <a href="#second" className="btn bg_white ml_10"><T>transfersPage.first.button.1</T></a>
                    </div>
                </div>
                <img src={getLocalImg('webp-images/transfers/transfer_first_right.webp')} alt="first_right" />
            </div>
        </section>
    )
}