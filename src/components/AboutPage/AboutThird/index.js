import React from 'react';
import { Trans as T } from 'react-i18next';

import { Card } from './Card';
import './Third.css';


const cards = [
    { img: 'about/vission.png', title: <T>aboutPage.third.title.0</T>, content: <T>aboutPage.third.text.0</T> },
    { img: 'about/mission.png', title: <T>aboutPage.third.title.1</T>, content: <T>aboutPage.third.text.1</T> },
    { img: 'about/target.png', title: <T>aboutPage.third.title.2</T>, content: <T>aboutPage.third.text.2</T> }
]

export const AboutThird = () => {

    return (
        <section className="about_third text_center">
            <div className="card_container">
                {cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </div>
        </section>
    )
}