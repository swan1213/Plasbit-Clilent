import React from 'react';
import { Trans as T } from 'react-i18next';
import { useResize, getLocalImg } from '../../../utils/helpers';
import './First.css';


export const ContactFirst = () => {

    const { isMobile } = useResize()

    return (
        <section className="contact_first" style={{ backgroundImage: `url(${getLocalImg('webp-images/contact/first_bg.webp')})` }}>
            <div className="contact_container">
                <div>
                    <h1 className='main_title text_white'><T>contactPage.title.0</T> <span><span><T>contactPage.title.1</T></span></span></h1>
                </div>
                <div className='content_texts'>
                    <div className="text">
                        {!isMobile && <><T>contactPage.line_1.text.0</T>
                            <a href="mailto:support@plasbit.com"><span className="text_blue"><T>contactPage.email</T></span></a>
                            <T>contactPage.line_1.text.1</T><br />
                            <T>contactPage.line_1.text.2</T></>}
                        {isMobile && <><T>contactPage.line_1.textMobile.0</T>
                            <a href="mailto:support@plasbit.com"><span className="text_blue"><T>contactPage.email</T></span></a>
                            <T>contactPage.line_1.textMobile.1</T><br />
                            <T>contactPage.line_1.textMobile.2</T><br />
                            <T>contactPage.line_1.textMobile.3</T></>}
                    </div>
                    <div className="text">
                        <T>contactPage.line_2.text</T>
                    </div>
                    <div className="text">
                        {!isMobile && <><T>contactPage.line_3.text.0</T>
                            <a href="https://telegram.me/plasbit" target='_blank' rel='noreferrer'><span className="text_blue"><T>contactPage.telegram</T></span></a>
                            <T>contactPage.line_3.text.1</T><br/>
                            <T>contactPage.line_3.text.2</T>
                            </>}
                        {isMobile && <><T>contactPage.line_3.textMobile.0</T>
                            <a href="https://telegram.me/plasbit" target='_blank' rel='noreferrer'><span className="text_blue"><T>contactPage.telegram</T></span></a>
                            <T>contactPage.line_3.textMobile.1</T><br />
                            <T>contactPage.line_3.textMobile.2</T><br />
                            <T>contactPage.line_3.textMobile.3</T><br />
                            </>}
                    </div>
                </div>
            </div>
        </section>
    )
}