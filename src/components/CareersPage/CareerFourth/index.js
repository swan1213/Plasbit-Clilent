
import React from 'react'
import { Trans as T } from 'react-i18next';

import { getImg } from '../../../utils/helpers';
import './Fourth.css';

export const CareerFourth = () => {

    return (
        <section className="career_fourth text_center">
            <div className="title mb_20">
                <T>careerPage.fourth.title.0</T>
            </div>
            <div className="text">
                <T>careerPage.fourth.text.0</T>
            </div>
            <div className="text mt_40">
                <T>careerPage.fourth.text.1</T>
            </div>
            <div className="text mt_40">
                <T>careerPage.fourth.text.2</T>
            </div>
            <img src={getImg('career/fourth_bg.png')} alt="fourth_bg" />
            <div className="title mb_20">
                <T>careerPage.fourth.title.1</T>
            </div>
            <div className="text">
                <T>careerPage.fourth.text.3</T>
            </div>
            <div className="text mt_40">
                <T>careerPage.fourth.text.4</T>
            </div>
            <div className="text mt_40">
                <T>careerPage.fourth.text.5</T>
            </div>
        </section>
    )
}