import React from 'react';
import { Trans as T } from 'react-i18next';
import { Accordion } from '../Accordion';
import './Fourth.css';


const faqs = [
    {
        "title": <T>cardPage.fourth.faqs.0.title</T>,
        "content": [<T>cardPage.fourth.faqs.0.text.0</T>]
    },
    {
        "title": <T>cardPage.fourth.faqs.1.title</T>,
        "content": [
            <T>cardPage.fourth.faqs.1.text.0</T>,
            <T>cardPage.fourth.faqs.1.text.1</T>,
            <T>cardPage.fourth.faqs.1.text.2</T>,
            <T>cardPage.fourth.faqs.1.text.3</T>
        ]
    },
    {
        "title": <T>cardPage.fourth.faqs.2.title</T>,
        "content": [<T>cardPage.fourth.faqs.2.text.0</T>]
    },
    {
        "title": <T>cardPage.fourth.faqs.3.title</T>,
        "content": [<T>cardPage.fourth.faqs.3.text.0</T>]
    },
    {
        "title": <T>cardPage.fourth.faqs.4.title</T>,
        "content": [<T>cardPage.fourth.faqs.4.text.0</T>]
    },
    {
        "title": <T>cardPage.fourth.faqs.5.title</T>,
        "content": [<T>cardPage.fourth.faqs.5.text.0</T>]
    },
    {
        "title": <T>cardPage.fourth.faqs.6.title</T>,
        "content": [<T>cardPage.fourth.faqs.6.text.0</T>]
    },
    {
        "title": <T>cardPage.fourth.faqs.7.title</T>,
        "content": [<T>cardPage.fourth.faqs.7.text.0</T>]
    }
]

export const CardFourth = () => {
    return (
        <section className="card_fourth text_center">
            <div className="contain">
                <h2 className="title fourth_title text_blue">
                    <T>cardPage.fourth.title.0</T> <span className="mobile_none"><T>cardPage.fourth.title.1</T></span>
                </h2>
                {faqs.map((faq, index) => (
                    <Accordion obj={faq} key={index} arrow={true} />
                ))}
            </div>
        </section>
    )
}