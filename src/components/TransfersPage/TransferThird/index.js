
import React from 'react';
import { Trans as T } from 'react-i18next';

import './Third.css';
import { getImg, getLocalImg, useResize } from '../../../utils/helpers';


export const TransferThird = () => {

    const { isMobile } = useResize()

    return (
        <section id="third" className="transfer_third"
            style={isMobile ? { backgroundImage: `url(${getImg('transfers/third_bg_mob.png')})` }
                : { backgroundImage: `url(${getLocalImg('webp-images/transfers/transfer_third_bg.webp')}` }}>
            <div className="third_container">
                <div className="left">
                    <h2 className="title white">
                        <T>transfersPage.third.title.0</T>
                        <span><span><T>transfersPage.third.title.1</T></span></span>
                        <T>transfersPage.third.title.2</T>
                    </h2>
                    <div className="text white">
                        <T>transfersPage.third.text</T>
                    </div>
                    <a href={`${process.env.REACT_APP_URL}signup`} className="btn mt_50 white"><T>transfersPage.third.button</T></a>
                </div>
                {!isMobile && <img src={getLocalImg('webp-images/transfers/transfer_third_right.webp')} alt="transfer-third-right"/>}
            </div>
            {isMobile && <img src={getImg('transfers/third_right_mob.png')} alt="transfer-third-mob"/>}
        </section>
    )
}