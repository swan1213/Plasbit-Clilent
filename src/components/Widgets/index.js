import React from 'react';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';
import { WidgetPreview } from './WidgetPreview';

export const Widget = () => {
    return (
        <>
            <CustomHelmet title={siteTitles.widgets} description={siteDescriptions.widgets} canonical={siteCanonical.widgets} />
            
            <div className='row'>
                <WidgetPreview />
            </div>
        </>
    );
};

export { Widget as default } from './index';