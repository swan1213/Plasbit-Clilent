import React from 'react';
import { Link } from 'react-router-dom';
import { Trans as T } from 'react-i18next';
import { useResize, getImg } from '../../../utils/helpers';
import './Help.css';

export const WalletHelp = () => {
  const { isMobile } = useResize();
  return (
    <section className="wallet_help">
      {!isMobile && <img src={getImg('wallet/help_bg.png')} alt="help_bg" />}
      <div className="help_inner">
        <h3 className="help_title">
          <T>walletPage.help.title</T>
        </h3>
        {isMobile && <Link to="/contact" className="btn bg_white btn_mobile"><T>walletPage.help.button</T></Link>}
        <p className="text text_white">
          <T>walletPage.help.text.0</T>
          {!isMobile && <br />}
          <T>walletPage.help.text.1</T>
          <Link className="text white link" to="public-faq">
            <T>walletPage.help.text.2</T>
          </Link>
        </p>
        { !isMobile && <Link to="/contact" className="btn bg_white"><T>walletPage.help.button</T></Link>}
      </div>
    </section>
  );
};
