import React from 'react';
import { Trans as T } from 'react-i18next';
import { getLocalImg } from '../../../utils/helpers';
import './Second.css';
import { Card } from './Card';

const cards = [
    {
        img: 'card/box1-1.png',
        title: <T>cardPage.second.title.0</T>,
        content: <T>cardPage.second.text.0</T>
    },
    {
        img: 'card/box2-1.png',
        title: <T>cardPage.second.title.1</T>,
        content: <T>cardPage.second.text.1</T>
    },
    {
        img: 'card/box3-1.png',
        title: <T>cardPage.second.title.2</T>,
        content: <T>cardPage.second.text.2</T>
    },
    {
        img: 'card/box1-2.png',
        title: <T>cardPage.second.title.3</T>,
        content: <T>cardPage.second.text.3</T>
    },
    {
        img: 'card/box2-2.png',
        title: <T>cardPage.second.title.4</T>,
        content: <T>cardPage.second.text.4</T>
    },
    {
        img: 'card/box3-2.png',
        title: <T>cardPage.second.title.5</T>,
        content: <T>cardPage.second.text.5</T>
    }
]
export const CardSecond = () => {
    return (
        <section className="card_second" style={{ backgroundImage: `url(${getLocalImg('webp-images/cards/card_second-bg.webp')}` }}>
            <div id="second" className="box_container">
                <div className="box_first">
                    <Card card={cards[0]} />
                    <Card card={cards[3]} />
                </div>
                <div className="box_second mobile_none">
                    <Card card={cards[1]} />
                    <Card card={cards[4]} />
                </div>
                <div className="box_third mobile_none">
                    <Card card={cards[2]} />
                    <Card card={cards[5]} />
                </div>
            </div>
        </section>
    )
}