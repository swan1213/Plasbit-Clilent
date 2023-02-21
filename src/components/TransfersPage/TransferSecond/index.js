import React from 'react';
import { Link } from "react-router-dom";
import { Trans as T } from 'react-i18next';

import './Second.css';
import { Card } from '../Card';

const cards = [
    { img: 'transfers/bank.png', title: <T>transfersPage.second.cards.title.0</T>, text: <T>transfersPage.second.cards.text.0</T> },
    { img: 'transfers/world.png', title: <T>transfersPage.second.cards.title.1</T>, text: <T>transfersPage.second.cards.text.1</T> },
    { img: 'transfers/audited.png', title: <T>transfersPage.second.cards.title.2</T>, text: <T>transfersPage.second.cards.text.2</T> },
    { img: 'transfers/extra.png', title: <T>transfersPage.second.cards.title.3</T>, text: <T>transfersPage.second.cards.text.3</T> },
    { img: 'transfers/data.png', title: <T>transfersPage.second.cards.title.4</T>, text: <T>transfersPage.second.cards.text.4</T> },
    { img: 'transfers/dedicated.png', title: <T>transfersPage.second.cards.title.5</T>, text: <T>transfersPage.second.cards.text.5</T> },
]

export const TransferSecond = () => {

    return (
        <section id="second" className="transfer_second">
            <h2 className="title text_center">
                <T>transfersPage.second.title</T>
            </h2>
            <div className="text text_center">
                <T>transfersPage.second.text.0</T>
            </div>
            <div className="cards mt_50">
                {cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </div>
            <div className="font_25 font_600 mt_80 text_center">
                <T>transfersPage.second.text.1</T>
            </div>
            <Link to="/safe" className="btn active"><T>transfersPage.second.button</T></Link>
        </section>
    )
}