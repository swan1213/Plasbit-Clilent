import React from 'react';
import { useSelector } from 'react-redux';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';

import { PriceFirst } from './PriceFirst';
import { PriceSecond } from './PriceSecond';

export const PricePage = () => {

    const dataSet = useSelector(state => state.globalData?.dataSet);

    return (
        <>
            <CustomHelmet title={siteTitles.prices} description={siteDescriptions.prices} canonical={siteCanonical.prices} />
            <div className="App">
                <main>
                    <PriceFirst prices={dataSet} />
                    <PriceSecond prices={dataSet} />
                </main>
            </div>
        </>
    );
}

export { PricePage as default } from './index'
