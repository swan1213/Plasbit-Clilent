import React from 'react';
import { Trans as T } from 'react-i18next';
import { CustomHelmet } from '../../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../../utils/helpers';

export const LegalAccess = () => {

    return (
        <>

            <CustomHelmet title={siteTitles.legalAccess} description={siteDescriptions.legalAccess} canonical={siteCanonical.legalAccess} />
            
            <div className="tab_content active">
                <div className="text tab_title"><T>legalPage.access.title</T></div>
                <div className="tab_text"><T>legalPage.access.updated</T></div>
                <div className="index_content">
                    <div className="content_text">
                        <T>legalPage.access.text</T>
                    </div>
                </div>
            </div>
        </>
    );
}