import React from 'react';
import { Trans as T } from 'react-i18next';
import { getLocalImg } from '../../../utils/helpers';

import './Help.css';

export const CardHelp = () => {
    return (
        <section className="card_fifth" style={{ backgroundImage: `url(${getLocalImg('webp-images/cards/card_help_fifth-bg.webp')})` }}>
            <div className="card_container">
                <div className="left_content">
                    <h2 className="help_title">
                        <T>cardPage.help.title.0</T> <br />
                        <T>cardPage.help.title.1</T>
                    </h2>
                    <a href={`${process.env.REACT_APP_URL}signup`} className="btn bg_white text_blue"><T>cardPage.help.button</T></a>
                </div>
                <img className="mobile_none" height={'384px'} width={'700px'} src={getLocalImg('webp-images/cards/card_help_hand.webp')} alt="" />
            </div>
        </section>
    )
}