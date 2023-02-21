import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Trans as T } from 'react-i18next';
import { useResize } from '../../../utils/helpers';
import { CustomHelmet } from '../../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../../utils/helpers';

export const PrivacyCookie = () => {
  const { isMobile } = useResize();

  return (
    <>
      <CustomHelmet
        title={siteTitles.privacyCookie}
        description={siteDescriptions.privacyCookie}
        canonical={siteCanonical.privacyCookie}
      />
      <div className="tab_content active">
        <h1 className="text tab_title"><T>privacyPage.cookie.title</T></h1>
        <div className="tab_text"><T>privacyPage.cookie.updated</T></div>
        <div className="index_content">
          {!isMobile
              && (
              <StickyContainer>
                <div className="index">
                  <Sticky>
                    {({ style }) => (
                      <div style={{ ...style }}>
                        <a href="#cookie" className="text link"><T>privacyPage.cookie.section_1.title</T></a>
                        <a href="#use" className="text link"><T>privacyPage.cookie.section_2.title</T></a>
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
                 <a href="#scope" className="text link"><T>privacyPage.cookie.section_1.title</T></a>
                 <a href="#collect" className="text link"><T>privacyPage.cookie.section_2.title</T></a>
               </div>
             </div>
             )}
          <div className="content">
            <div className="content_text">
              <T>privacyPage.cookie.text.0</T>
            </div>
            <div className="content_text">
              <T>privacyPage.cookie.text.1</T>
            </div>
            <div id="cookie">
              <h2 className="text content_title"><T>privacyPage.cookie.section_1.title</T></h2>
              <div className="content_text">
                <T>privacyPage.cookie.section_1.text.0</T>
              </div>
              <div className="content_text">
                <T>privacyPage.cookie.section_1.text.1</T>
              </div>
            </div>
            <div id="use">
              <h2 className="text content_title"><T>privacyPage.cookie.section_2.title</T></h2>
              <div className="content_text">
                <T>privacyPage.cookie.section_2.text.0</T>
              </div>
              <div className="content_text">
                <T>privacyPage.cookie.section_2.text.1</T>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
