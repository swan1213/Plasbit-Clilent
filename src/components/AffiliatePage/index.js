import React from 'react';
import { AffiliateFirst } from './AffiliateFirst';
import { AffiliateSecond } from './AffiliateSecond';
import { AffiliateThird } from './AffiliateThird';
import { AffiliateForth } from './AffiliateForth';
import { AffiliateFifth } from './AffiliateFifth';
import { WalletHelp } from '../WalletPage/WalletHelp';
import './style.css';

export const Affiliate = () => {
  return (
    <div className="App">
      <main>
        <div className="affiliate_page">
          <AffiliateFirst />
          <AffiliateSecond />
          <AffiliateThird />
          <AffiliateForth />
          <AffiliateFifth />
          <WalletHelp />
        </div>
      </main>
    </div>
  );
};

export { Affiliate as default } from './index'
