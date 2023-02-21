import React from 'react';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';
import { ContactFirst } from './ContactFirst';
import { ContactSecond } from './ContactSecond';


export const ContactPage = () => {

    return (
        <>
            <CustomHelmet title={siteTitles.contact} description={siteDescriptions.contact} canonical={siteCanonical.contact} />      
            <div className="App">
                <main>
                    <ContactFirst />
                    <ContactSecond />
                </main>
            </div>
        </>
    );
};

export { ContactPage as default } from './index';