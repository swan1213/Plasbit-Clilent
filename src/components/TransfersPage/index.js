import React from 'react';
import { CustomHelmet }  from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';
import { WalletHelp } from '../WalletPage/WalletHelp';
import { TransferFirst } from './TransferFirst';
import { TransferSecond } from './TransferSecond';
import { TransferThird } from './TransferThird';
import { TransferFourth } from './TransferFourth';
import { TransferFifth } from './TransferFifth';
import { TransferSixth } from './TransferSixth';
import { TransferSeventh } from './TransferSeventh';

export const TransfersPage = () => {

    return (
        <>

            <CustomHelmet title={siteTitles.transfers} description={siteDescriptions.transfers} canonical={siteCanonical.transfers} />
            
            <div className="App">
                <main>
                    <TransferFirst />
                    <TransferSecond />
                    <TransferThird />
                    <TransferFourth />
                    <TransferFifth />
                    <TransferSixth />
                    <TransferSeventh />
                    <WalletHelp />
                </main>
            </div>
        </>
    );
};

export { TransfersPage as default } from './index';
