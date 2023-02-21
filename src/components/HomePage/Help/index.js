import React from 'react'
import { Link } from 'react-router-dom';
import { Trans as T } from 'react-i18next';
import { useResize } from '../../../utils/helpers';
import './Help.css';

export const Help = () => {

    const { isMobile } = useResize()
    return (
        <section className="home_help">
            <div className="container">
                <div className="help_inner">
                    <h3 className="help_title">
                        <T>homePage.help.title</T>
                    </h3>
                    {isMobile && <Link to="/contact" className="btn contact_btn">
                        <T>homePage.help.button</T>
                    </Link>}
                    <p className="text white help_text">
                        <T>homePage.help.text.0</T>
                        <T>homePage.help.text.1</T>
                        <Link className='text white link' to='public-faq'>
                            <T>homePage.help.text.2</T>
                        </Link>
                    </p>
                    {!isMobile && <Link to="/contact" className="btn contact_btn">
                        <T>homePage.help.button</T>
                    </Link>}
                </div>
            </div>
        </section>
    );
}