import React from 'react';
import {
  Route,
  NavLink,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Trans as T } from 'react-i18next';

import { PrivacyNotice } from './PrivacyNotice';
import { PrivacyEu } from './PrivacyEu';
import { PrivacyCookie } from './PrivacyCookie';
import { PageNotFound } from '../PageNotFound';
import './Privacy.css';

export const PrivacyPage = () => (
  <div className="App">
    <main>
      <section className="privacy">
        <div className="tabs">
          <NavLink to="/privacy/notice" className="tab text" activeClassName="active">
            <T>privacyPage.notice.title</T>
          </NavLink>
          <NavLink to="/privacy/eu" className="tab text" activeClassName="active">
            <T>privacyPage.eu.title</T>
          </NavLink>
          <NavLink to="/privacy/cookie" className="tab text" activeClassName="active">
            <T>privacyPage.cookie.title</T>
          </NavLink>
        </div>
        <div className="tabs_content">
          <Switch>
            <Route exact path="/privacy/notice">
              <PrivacyNotice />
            </Route>
            <Route path="/privacy/eu">
              <PrivacyEu />
            </Route>
            <Route path="/privacy/cookie">
              <PrivacyCookie />
            </Route>
            <Route path="/privacy/*">
              <PageNotFound />
            </Route>
            <Redirect from="/" to="/privacy/notice" />
          </Switch>
        </div>
      </section>
    </main>
  </div>
);

export { PrivacyPage as default } from './index';
