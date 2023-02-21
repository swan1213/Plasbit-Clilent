
import React from 'react';
import { Trans as T } from 'react-i18next';

import './Sixth.css';
import { getImg, getLocalImg, useResize } from '../../../utils/helpers';
import { Accordion } from '../Accordion';

const faqs = [
    { title: <T>transfersPage.fourth.faqs.title.0</T>, text: <T>transfersPage.fourth.faqs.text.0</T> },
    { title: <T>transfersPage.fourth.faqs.title.1</T>, text: <div><p><T>transfersPage.fourth.faqs.text.1</T></p><br /><p><T>transfersPage.fourth.faqs.text.2</T></p></div> },
    { title: <T>transfersPage.fourth.faqs.title.2</T>, text: <div><p><T>transfersPage.fourth.faqs.text.3</T></p><br /><p><T>transfersPage.fourth.faqs.text.4</T></p><br /><p><T>transfersPage.fourth.faqs.text.5</T></p><br /><p><T>transfersPage.fourth.faqs.text.6</T></p><br /><p><T>transfersPage.fourth.faqs.text.7</T></p><br /><p><T>transfersPage.fourth.faqs.text.8</T></p><br /><p><T>transfersPage.fourth.faqs.text.9</T></p></div> },
    { title: <T>transfersPage.fourth.faqs.title.3</T>, text: <div><p><T>transfersPage.fourth.faqs.text.10</T></p></div> },
    { title: <T>transfersPage.fourth.faqs.title.4</T>, text: <div><p><T>transfersPage.fourth.faqs.text.11</T></p></div> },
    { title: <T>transfersPage.fourth.faqs.title.5</T>, text: <div><p><T>transfersPage.fourth.faqs.text.12</T></p></div> }
]

export const TransferSixth = () => {
    const { isMobile } = useResize()

    return (
        <section className="transfer_sixth text_center"
            style={isMobile ? { backgroundImage: `url(${getImg('transfers/sixth_bg_mob.png')})` }
                : { backgroundImage: `url(${getLocalImg('webp-images/transfers/transfer_sixth_bg.webp')}`}}>
            <div className="font_25 font_bold light_blue">
                <T>transfersPage.fourth.title.0</T>
            </div>
            <h2 className="title">
                <T>transfersPage.fourth.title.1</T>
            </h2>
            <div className="tansfer_container">
                <img className="mt_50" src={getLocalImg('webp-images/transfers/transfer_fourth_left.webp')} alt="img" />
                <div className="faqs ml_50">
                    {faqs.map((faq, index) => (
                        <Accordion obj={faq} key={index} arrow />
                    ))}
                    <a href={`${process.env.REACT_APP_STORAGE || ""}pdf/plasbit_guide.pdf`} target="_blank" rel='noreferrer' className="btn active mt_80"><T>transfersPage.fourth.button</T></a>
                </div>
            </div>
        </section>
    )
}