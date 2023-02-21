import React from 'react';
import { Trans as T } from 'react-i18next';

import { useResize } from '../../../utils/helpers';
import './First.css';


export const CareerFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="career_first text_center">
            <div className="career_title">
                <h1 className='main_title_h1'><T>careerPage.first.main.0</T></h1>
                <h2 className='main_title'><T>careerPage.first.title.0</T> {isMobile && <br />}<T>careerPage.first.title.1</T> <br />
                <span><span><T>careerPage.first.title.2</T></span></span></h2>
            </div>
            <div className="font_38 mt_50 font_600 dark_blue">
                <T>careerPage.first.text.0</T> {isMobile && <br />}<T>careerPage.first.text.1</T>
            </div>
            <a href="#career_fifth">
                <button className="btn active">
                    <T>careerPage.first.button</T>
                </button>
            </a>
        </section>
    )
}