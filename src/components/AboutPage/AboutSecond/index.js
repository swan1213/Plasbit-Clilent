
import React from 'react'
import { Trans as T } from 'react-i18next'

import { getImg } from '../../../utils/helpers';
import './Second.css'


export const AboutSecond = () => {

    return (
        <section className="about_second">
            <div className="left">
                <img src={getImg('about/third_bg.png')} className="mt_50" alt="third_bg-img" />
            </div>
            <div className="right">
                <div className="title">
                    <span><span><T>aboutPage.second.title</T></span></span>
                </div>
                <div className="text">
                    <T>aboutPage.second.text.0</T>
                </div>
                <div className="text">
                    <T>aboutPage.second.text.1</T>
                </div>
                <div className="text">
                    <T>aboutPage.second.text.2</T>
                </div>
                <div className="text">
                    <T>aboutPage.second.text.3</T>
                </div>
                <div className="text">
                    <T>aboutPage.second.text.4</T>
                </div>
            </div>
        </section>
    )
}