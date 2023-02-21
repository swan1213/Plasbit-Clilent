import React from 'react';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';
import { WalletHelp } from '../WalletPage/WalletHelp';
import { CareerFirst } from './CareerFirst';
import { CareerSecond } from './CareerSecond';
import { CareerThird } from './CareerThird';
import { CareerFourth } from './CareerFourth';
import { CareerFifth } from './CareerFifth';


export const CareersPage = () => {

    return (
        <>
            <CustomHelmet title={siteTitles.careers} description={siteDescriptions.careers} canonical={siteCanonical.careers} />
            <div className="App">
                <main>
                    <CareerFirst />
                    <CareerSecond />
                    <CareerThird />
                    <CareerFourth />
                    <CareerFifth />
                    <WalletHelp />
                </main>
            </div>
        </>
    );
};

export { CareersPage as default } from './index';
