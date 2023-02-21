import React from 'react';

import { PaymentFirst } from './PaymentFirst';
import { PaymentSecond } from './PaymentSecond';
import { PaymentThird } from './PaymentThird';
import { PaymentForth } from './PaymentForth';
import { PaymentFifth } from './PaymentFifth';
import { PaymentSixth } from './PaymentSixth';
import { WalletHelp } from '../WalletPage/WalletHelp';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteCanonical, siteDescriptions, siteTitles } from '../../utils/helpers';

export const PaymentPage = () => (
  <>
    <CustomHelmet title={siteTitles.payment} description={siteDescriptions.payment} siteCanonical={siteCanonical.payment} />
    <PaymentFirst />
    <PaymentSecond />
    <PaymentThird />
    <PaymentForth />
    <PaymentFifth />
    <PaymentSixth />
    <WalletHelp />
  </>
);

export { PaymentPage as default } from './index';
