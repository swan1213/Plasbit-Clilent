import React from 'react';
import "slick-carousel/slick/slick.css";
import { siteTitles, siteDescriptions, siteCanonical } from '../../utils/helpers';
import { CustomHelmet }  from '../CustomHelmet/CustomHelmet';
import { CardFirst } from './CardFirst';
import { CardSecond } from './CardSecond';
import { CardThird } from './CardThird';
import { CardFourth } from './CardFourth';
import { CardHelp } from './CardHelp';


export const CardPage = () => {
    return (
        <>
            <CustomHelmet title={siteTitles.cards} description={siteDescriptions.cards} canonical={siteCanonical.cards} />
            <div className="App">
                <main>
                    <CardFirst />
                    <CardSecond />
                    <CardThird />
                    <CardFourth />
                    <CardHelp />
                </main>
            </div>
        </>
    );
};

export { CardPage as default } from './index';
