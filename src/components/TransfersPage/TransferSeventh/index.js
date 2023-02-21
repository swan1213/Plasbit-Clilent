
import React from 'react';
import { Trans as T } from 'react-i18next';

import './Seventh.css';
import { Accordion } from '../Accordion';

const faqs = [
    {
        title: <T>transfersPage.seventh.faqs.0.title</T>,
        text: <T>transfersPage.seventh.faqs.0.text</T>
    },
    {
        title: <T>transfersPage.seventh.faqs.1.title</T>,
        text: <T>transfersPage.seventh.faqs.1.text</T>
    },
    {
        title: <T>transfersPage.seventh.faqs.2.title</T>,
        text: <div><p><T>transfersPage.seventh.faqs.2.text.0</T></p><br /><p><T>transfersPage.seventh.faqs.2.text.1</T></p></div>
    },
    {
        title: <T>transfersPage.seventh.faqs.3.title</T>,
        text: <T>transfersPage.seventh.faqs.3.text</T>
    },
    {
        title: <T>transfersPage.seventh.faqs.4.title</T>,
        text: <T>transfersPage.seventh.faqs.4.text</T>
    },
    {
        title: <T>transfersPage.seventh.faqs.5.title</T>,
        text: <T>transfersPage.seventh.faqs.5.text</T>
    },
    {
        title: <T>transfersPage.seventh.faqs.6.title</T>,
        text: <T>transfersPage.seventh.faqs.6.text</T>
    },
]

export const TransferSeventh = () => {

    return (
        <section className="transfer_seventh text_center">
            <h2 className="title">
                <T>transfersPage.seventh.title</T>
            </h2>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <Accordion obj={faq} key={index} arrow />
                ))}
            </div>
        </section>
    )
}