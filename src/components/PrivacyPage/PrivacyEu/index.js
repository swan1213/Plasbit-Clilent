import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Trans as T } from 'react-i18next';
import { siteCanonical, useResize } from '../../../utils/helpers';
import { CustomHelmet } from '../../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions } from '../../../utils/helpers';

export const PrivacyEu = () => {
  const { isMobile } = useResize();
  return (
    <>
      <CustomHelmet
        title={siteTitles.privacyEu}
        description={siteDescriptions.privacyEu}
        canonical={siteCanonical.privacyEu}
      />
      <div className="tab_content active">
        <h1 className="text tab_title"><T>privacyPage.eu.title</T></h1>
        <div className="tab_text"><T>privacyPage.eu.updated</T></div>
        <div className="index_content">
          {!isMobile
          && (
          <StickyContainer>
            <div className="index">
              <Sticky>
                {({ style }) => (
                  <div style={{ ...style }}>
                    <a href="#cookie" className="text link"><T>privacyPage.eu.section_1.title</T></a>
                    <a href="#use" className="text link"><T>privacyPage.eu.section_2.title</T></a>
                  </div>
                )}
              </Sticky>
            </div>
          </StickyContainer>
          )}
          {isMobile
          && (
          <div className="index">
            <div>
              <a href="#scope" className="text link"><T>privacyPage.eu.section_1.title</T></a>
              <a href="#collect" className="text link"><T>privacyPage.eu.section_2.title</T></a>
            </div>
          </div>
          )}
          <div className="content">
            <div id="cookie">
              <h2 className="text content_title"><T>privacyPage.eu.section_1.title</T></h2>
              <div className="content_text">
                <T>privacyPage.eu.section_1.text</T>
              </div>
            </div>
            <div id="use">
              <h2 className="text content_title"><T>privacyPage.eu.section_2.title</T></h2>
              <div className="content_text">
                <T>privacyPage.eu.section_2.text.0</T>
              </div>
              <div className="content_text">
                <T>privacyPage.eu.section_2.text.1</T>
              </div>
              <div className="content_text">
                <T>privacyPage.eu.section_2.text.2</T>
              </div>
              <div className="content_text">
                <T>privacyPage.eu.section_2.text.3</T>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
