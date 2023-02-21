
import React from 'react';
import { Trans as T } from 'react-i18next';

import { getImg } from '../../../utils/helpers';
import './Second.css';

export const CareerSecond = () => {

    return (
        <section className="career_second">
            <div className="left">
                <img src={getImg('career/second_bg.png')} alt="second-bg-img"/>
            </div>
            <div className="right">
                <div className="title mb_20">
                    <T>careerPage.second.title.0</T>
                </div>
                <div className="text">
                    <T>careerPage.second.text.0</T>
                </div>
                <div className="title mb_20 mt_50">
                    <T>careerPage.second.title.1</T>
                </div>
                <div className="text">
                    <T>careerPage.second.text.1</T>
                </div>
                <div className="text mt_20">
                    <T>careerPage.second.text.2</T>
                </div>
            </div>
        </section>
    )
}