import React from 'react';
import { CustomHelmet }  from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';
import { WalletHelp } from '../WalletPage/WalletHelp';
import { AboutFirst } from './AboutFirst';
import { AboutSecond } from './AboutSecond';
import { AboutThird } from './AboutThird';
import { AboutFourth } from './AboutFourth';
import { AboutFifth } from './AboutFifth';

export const AboutPage = () => {

    return (
        <>
            <CustomHelmet title={siteTitles.about} description={siteDescriptions.about} canonical={siteCanonical.about} />
            <div className="App">
                <main>
                    <AboutFirst />
                    <AboutSecond />
                    <AboutThird />
                    <AboutFourth />
                    <AboutFifth />
                    <WalletHelp />
                </main>
            </div>
        </>
    );
};

export { AboutPage as default } from './index';
