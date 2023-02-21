import React from 'react';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions } from '../../utils/helpers';
import { WalletHelp } from '../WalletPage/WalletHelp';
import { CalcFirst } from './CalcFirst';
import { CalcSecond } from './CalcSecond';

export const CalcPage = () => {

    return (
        <>
            <CustomHelmet title={siteTitles.calculator} description={siteDescriptions.calculator} />
            <div className="App">
                <main>
                    <CalcFirst />
                    <CalcSecond />
                    <WalletHelp />
                </main>
            </div>
        </>
    );
};

export { CalcPage as default } from './index';