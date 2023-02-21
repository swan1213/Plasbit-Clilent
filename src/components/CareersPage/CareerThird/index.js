
import React from 'react';
import { Trans as T } from 'react-i18next';

import './Third.css';

export const CareerThird = () => {

    return (
        <section className="career_third">
            <div className="card">
                <div className="font_25 font_600"><T>careerPage.third.0.title</T></div>
                <div className="title mt_20 mb_10">
                    <span><span><T>careerPage.third.0.text.0</T></span></span>
                </div>
                <div className="font_30 light_blue">
                    <T>careerPage.third.0.text.1</T>
                </div>
            </div>
            <div className="card">
                <div className="font_25 font_600"><T>careerPage.third.1.title</T></div>
                <div className="title mt_20 mb_10">
                    <span><span><T>careerPage.third.1.text.0</T></span></span>
                </div>
                <div className="font_30 light_blue">
                    <T>careerPage.third.1.text.1</T>
                </div>
            </div>
            <div className="card">
                <div className="font_25 font_600"><T>careerPage.third.2.title</T></div>
                <div className="title mt_20 mb_10">
                    <span><span><T>careerPage.third.2.text.0</T></span></span>
                </div>
                <div className="font_30 light_blue">
                    <T>careerPage.third.2.text.1</T>
                </div>
            </div>
        </section>
    )
}