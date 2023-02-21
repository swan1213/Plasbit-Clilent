
import React from 'react';
import { Trans as T } from 'react-i18next';

import { getImg } from '../../../utils/helpers';
import './Fourth.css';


export const AboutFourth = () => {

    return (
        <section className="about_fourth">
            <div className="card">
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/operating.png')} alt={'operating'}/>
                    </div>
                    <div className="title">
                        <span><span><T>aboutPage.fourth.title.0</T></span></span>
                    </div>
                    <div className="text">
                        <T>aboutPage.fourth.text.0</T>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/users.png')} alt={'users'}/>
                    </div>
                    <div className="title">
                        <span><span><T>aboutPage.fourth.title.1</T></span></span>
                    </div>
                    <div className="text">
                        <T>aboutPage.fourth.text.1</T>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/members.png')} alt={'members'}/>
                    </div>
                    <div className="title">
                        <span><span><T>aboutPage.fourth.title.2</T></span></span>
                    </div>
                    <div className="text">
                        <T>aboutPage.fourth.text.2</T>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="box">
                    <div className="img">
                        <img src={getImg('about/support.png')} alt={'support'}/>
                    </div>
                    <div className="title">
                        <span><span><T>aboutPage.fourth.title.3</T></span></span>
                    </div>
                    <div className="text">
                        <T>aboutPage.fourth.text.3</T>
                    </div>
                </div>
            </div>
        </section>
    )
}