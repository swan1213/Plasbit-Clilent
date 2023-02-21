import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Trans as T } from 'react-i18next';

import { LegalTerm } from './LegalTerm';
import { LegalAccess } from './LegalAccess';
import { WalletHelp } from '../WalletPage/WalletHelp';
import "../PrivacyPage/Privacy.css";

export const LegalPage = () => {

    return (
        <div className="App">
            <main>
                <section className="privacy">
                    <div className="tabs">
                        <NavLink to="/legal/term" className="tab text" activeClassName="active" >
                            <T>legalPage.term.title</T>
                        </NavLink>
                        <NavLink to="/privacy/notice" className="tab text" activeClassName="active" >
                            <T>legalPage.privacy.title</T>
                        </NavLink>
                        <NavLink to="/legal/access" className="tab text" activeClassName="active" >
                            <T>legalPage.access.title</T>
                        </NavLink>
                    </div>
                    <div className="tabs_content">
                        <Route component={LegalTerm} path="/legal/term" />
                        <Route component={LegalAccess} path="/legal/access" />
                    </div>
                </section>
                <WalletHelp />
            </main>
        </div>
    );
}

export { LegalPage as default } from './index'
