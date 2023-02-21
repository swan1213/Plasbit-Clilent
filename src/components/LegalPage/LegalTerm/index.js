import React from 'react';
import { StickyContainer, Sticky } from "react-sticky";
import { Trans as T } from 'react-i18next';
import { siteCanonical, useResize } from '../../../utils/helpers';
import { CustomHelmet } from '../../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions } from '../../../utils/helpers';

export const LegalTerm = () => {

    const { isMobile } = useResize();

    return (
        <>
            
            <CustomHelmet title={siteTitles.legalTerm} description={siteDescriptions.legalTerm} canonical={siteCanonical.legalTerms} />

            <div className="tab_content active">
                <h1 className="text tab_title"><T>legalPage.term.title</T></h1>
                <div className="tab_text"><T>legalPage.term.updated</T></div>
                <div className="index_content">
                    {!isMobile && <StickyContainer>
                        <div className="index">
                            <Sticky>
                                {({ style }) => (
                                    <div style={{ ...style }}>
                                        <a href="#scope" className="text link"><T>legalPage.term.section_1.title</T></a>
                                        <a href="#collect" className="text link"><T>legalPage.term.section_2.title</T></a>
                                    </div>
                                )}
                            </Sticky>
                        </div>
                    </StickyContainer>}
                    {isMobile && <div className="index">
                        <div>
                            <a href="#scope" className="text link"><T>legalPage.term.section_1.title</T></a>
                            <a href="#collect" className="text link"><T>legalPage.term.section_2.title</T></a>
                        </div>
                    </div>}
                    <div className="content">
                        <div id="scope">
                            <div className="text content_title"><T>legalPage.term.section_1.title</T></div>
                            <div className="content_text">
                                <T>legalPage.term.section_1.text.0</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_1.text.1</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_1.text.2</T>
                            </div>
                            <div className="content_subtitle">
                                <T>legalPage.term.section_1.subTitle_1</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_1.text_1.0</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_1.text_1.1</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_1.text_1.2</T>
                            </div>
                            <div className="content_subtitle">
                                <T>legalPage.term.section_1.subTitle_2</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_1.text_2.0</T>
                            </div>
                        </div>
                        <div id="collect">
                            <div className="text content_title"><T>legalPage.term.section_2.title</T></div>
                            <div className="content_text">
                                <T>legalPage.term.section_2.text.0</T>
                            </div>
                            <div className="content_subtitle">
                                <T>legalPage.term.section_2.subTitle_1</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_2.text_1.0</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_2.text_1.1</T>
                            </div>
                            <div className="content_subtitle">
                                <T>legalPage.term.section_2.subTitle_2</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_2.text_2.0</T>
                            </div>
                            <div className="content_text">
                                <T>legalPage.term.section_2.text_2.1</T>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}