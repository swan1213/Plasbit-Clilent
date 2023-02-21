
import React from 'react';
import { Link } from "react-router-dom";
import { Trans as T } from 'react-i18next';

import { useResize } from '../../../utils/helpers';
import './First.css';

export const AboutFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="about_first text_center">
            <div className="about_main_container">
                <h1><T>aboutPage.second.title</T></h1>
                <h2 className='main_title'><T>aboutPage.first.title.0</T> <span><span><T>aboutPage.first.title.1</T></span></span> <T>aboutPage.first.title.2</T></h2>
            </div>
            <div className="text">
                <T>aboutPage.first.text.0</T> {!isMobile && <br />}
                <T>aboutPage.first.text.1</T> {!isMobile && <br />}
                <T>aboutPage.first.text.2</T>
            </div>
            <Link to="/careers">
                <button className="btn active">
                    <T>aboutPage.first.button</T>
                </button>
            </Link>
        </section>
    )
}