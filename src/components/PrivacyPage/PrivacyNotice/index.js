import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Trans as T } from 'react-i18next';
import { useResize } from '../../../utils/helpers';
import { CustomHelmet } from '../../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../../utils/helpers';

export const PrivacyNotice = () => {
  const { isMobile } = useResize();
  return (
    <>
      <CustomHelmet
        title={siteTitles.privacyNotice}
        description={siteDescriptions.privacyNotice}
        canonical={siteCanonical.privacyNotice}
      />
      <div className="tab_content active">
        <h1 className="text tab_title"><T>privacyPage.notice.title</T></h1>
        <div className="tab_text"><T>privacyPage.notice.updated</T></div>
        <div className="index_content">
          {!isMobile
          && (
          <StickyContainer>
            <div className="index">
              <Sticky>
                {({ style }) => (
                  <div style={{ ...style }}>
                    <a href="#scope" className="text link"><T>privacyPage.notice.section_1.title</T></a>
                    <a href="#collect" className="text link"><T>privacyPage.notice.section_2.title</T></a>
                  </div>
                )}
              </Sticky>
            </div>
          </StickyContainer>
          )}
          {isMobile && (
          <div className="index">
            <div>
              <a href="#scope" className="text link"><T>privacyPage.notice.section_1.title</T></a>
              <a href="#collect" className="text link"><T>privacyPage.notice.section_2.title</T></a>
            </div>
          </div>
          )}
          <div className="content">
            <div id="scope">
              <h2 className="text content_title"><T>privacyPage.notice.section_1.title</T></h2>
              <div className="content_text">
                <T>privacyPage.notice.section_1.text.0</T>
              </div>
              <div className="content_text">
                <T>privacyPage.notice.section_1.text.1</T>
              </div>
              <div className="content_text">
                <T>privacyPage.notice.section_1.text.2</T>
              </div>
              <div className="content_text">
                <ol>
                  <li><T>privacyPage.notice.section_1.list.0</T></li>
                  <li><T>privacyPage.notice.section_1.list.1</T></li>
                  <li><T>privacyPage.notice.section_1.list.2</T></li>
                  <li><T>privacyPage.notice.section_1.list.3</T></li>
                </ol>
              </div>
            </div>
            <div id="collect">
              <h2 className="text content_title"><T>privacyPage.notice.section_2.title</T></h2>
              <div className="content_subtitle">
                <T>privacyPage.notice.section_2.subTitle</T>
              </div>
              <div className="content_text">
                <ul>
                  <li><T>privacyPage.notice.section_2.list.0</T></li>
                  <li><T>privacyPage.notice.section_2.list.1</T></li>
                  <li><T>privacyPage.notice.section_2.list.2</T></li>
                  <li><T>privacyPage.notice.section_2.list.3</T></li>
                  <li><T>privacyPage.notice.section_2.list.4</T></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
