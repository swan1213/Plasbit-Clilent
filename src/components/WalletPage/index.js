import React from 'react';
import { CustomHelmet }  from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';
import { WalletFirst } from './WalletFirst';
import { WalletSecond } from './WalletSecond';
import { WalletThird } from './WalletThird';
import { WalletFourth } from './WalletFourth';
import { WalletFifth } from './WalletFifth';
import { WalletHelp } from './WalletHelp';


export const WalletPage = () => {

    return (
        <>
            <CustomHelmet title={siteTitles.wallet} description={siteDescriptions.wallet} canonical={siteCanonical.wallet} />
            
            <div className="App">
                <main>
                    <WalletFirst />
                    <WalletSecond />
                    <WalletThird />
                    <WalletFourth />
                    <WalletFifth />
                    <WalletHelp />
                </main>
            </div>
        </>
    );
};

export { WalletPage as default } from './index';
