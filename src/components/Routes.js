import React, { useEffect, useState, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useDispatch, useSelector } from 'react-redux';

import { getRemoteRoutePages, pageActions } from "../reducers";
import { HomePage } from "./HomePage";
import { PreLoader } from './PreLoader';

const Cookies = lazy(() => import("./layouts/Cookies"));
const IndexHeader = lazy(() => import("./layouts/IndexHeader"));
const IndexFooter = lazy(() => import("./layouts/IndexFooter"));
// const HomePage = lazy(() => import("./HomePage"));
const Widget = lazy(() => import("./Widgets"));
const CardPage = lazy(() => import("./CardPage"));
const CalcPage = lazy(() => import("./CalcPage"));
const WalletPage = lazy(() => import("./WalletPage"));
const ApplyAnalyst = lazy(() => import("./ApplyNow/ApplyAnalyst"));
const ApplyAssociate = lazy(() => import("./ApplyNow/ApplyAnalyst"));
const ApplyManager = lazy(() => import("./ApplyNow/ApplyManager"));
const ApplyOfficer = lazy(() => import("./ApplyNow/ApplyOfficer"));
const ApplyPrivacy = lazy(() => import("./ApplyNow/ApplyPrivacy"));
const ApplyProduct = lazy(() => import("./ApplyNow/ApplyProduct"));
const ApplyReact = lazy(() => import("./ApplyNow/ApplyReact"));
const ApplyResearcher = lazy(() => import("./ApplyNow/ApplyResearcher"));
const ApplySales = lazy(() => import("./ApplyNow/ApplySales"));
const ApplySenior = lazy(() => import("./ApplyNow/ApplySenior"));
const ApplySpecial = lazy(() => import("./ApplyNow/ApplySpecial"));
const ApplyStack = lazy(() => import("./ApplyNow/ApplyStack"));
const ContactPage = lazy(() => import("./ContactPage"));
const PrivacyPage = lazy(() => import("./PrivacyPage"));
const AboutPage = lazy(() => import("./AboutPage"));
const LegalPage = lazy(() => import("./LegalPage"));
const CareersPage = lazy(() => import("./CareersPage"));
const TransfersPage = lazy(() => import("./TransfersPage"));
const Basic = lazy(() => import("./pages/Basic"));
const Blog = lazy(() => import("./pages/Blog"));
const ContentPage = lazy(() => import("./ContentPage"));
const PricePage = lazy(() => import("./PricePage"));
const SecurityPage = lazy(() => import("./securityPage"));
const AllCards = lazy(() => import("./HomePage/AllCards"));
const PublicFaqOuter = lazy(() => import("./PublicFaqOuter"));
const PublicFaqMiddle = lazy(() => import("./PublicFaqMiddle"));
const PublicFaqInner = lazy(() => import("./PublicFaqInner"));
const PublicFaqSearchedResult = lazy(() => import("./PublicFaqSearchedResult"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const AffiliatePage = lazy(() => import("./AffiliatePage"));
const CommunityWall = lazy(() => import("./CommunityWall"));
const CommunityPage = lazy(() => import("./CommunityPage"));
const PaymentPage = lazy(() => import("./PaymentPage"));



const history = createBrowserHistory();

const Routes = () => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
        getRemoteRoutePages()
            .then(pages => {
                dispatch(pageActions.setRoutePages(pages));
                setIsLoading(false);
            });

  },[]);

  const routePages = useSelector(state => state.routePages?.pages);

  if(!isLoading){
    return (
      <>
        <Router history={history}>
          <Suspense fallback={<PreLoader />}>
              <IndexHeader/>
                <Switch>
                  
                  <Redirect from="/card" to={'/cards'} />

                  <Route exact path="/" component={() => <HomePage />} />
                  <Route strict exact path="/cards" component={() => <CardPage />} />
                  <Route strict exact path="/wallet" component={() => <WalletPage />} />
                  <Route strict exact path="/contact" component={() => <ContactPage />} />
                  <Route path="/privacy" component={() => <PrivacyPage />} />
                  <Route path="/legal" component={() => <LegalPage />} />
                  <Route strict exact path="/about" component={() => <AboutPage />} />
                  <Route strict exact path="/calculator" component={() => <CalcPage />} />
                  <Route strict exact path="/careers" component={() => <CareersPage />} />
                  <Route strict exact path="/transfers" component={() => <TransfersPage />} />
                  <Route strict exact path="/applyanalyst" component={() => <ApplyAnalyst />} />
                  <Route strict exact path="/applyassociate" component={() => <ApplyAssociate />} />
                  <Route strict exact path="/applymanager" component={() => <ApplyManager />} />
                  <Route strict exact path="/applyofficer" component={() => <ApplyOfficer />} />
                  <Route strict exact path="/applyprivacy" component={() => <ApplyPrivacy />} />
                  <Route strict exact path="/applyproduct" component={() => <ApplyProduct />} />
                  <Route strict exact path="/applyreact" component={() => <ApplyReact />} />
                  <Route strict exact path="/applyresearcher" component={() => <ApplyResearcher />} />
                  <Route strict exact path="/applysales" component={() => <ApplySales />} />
                  <Route strict exact path="/applysenior" component={() => <ApplySenior />} />
                  <Route strict exact path="/applyspecial" component={() => <ApplySpecial />} />
                  <Route strict exact path="/applystack" component={() => <ApplyStack />} />
                  <Route strict exact path="/prices" component={() => <PricePage />} />
                  <Route strict exact path="/security" component={() => <SecurityPage />}/>
                  <Route strict exact path="/community" component={() => <CommunityPage />}/>
                  <Route strict exact path="/community-wall" component={() => <CommunityWall />}/>
                  <Route strict exact path="/widgets" component={() => <Widget />}/>
                  <Route strict exact path="/blog" component={() => <ContentPage type={"Blog"}/>} sensitive />
                  <Route strict exact path="/crypto-basic" component={() => <ContentPage type={"CryptoBasic"}/>} sensitive />
                  <Route strict exact path="/crypto-advanced" component={() => <ContentPage type={"CryptoAdvanced"} />} sensitive />
                  <Route strict exact path="/anonymous" component={() => <ContentPage type={"Anonymous"} />} sensitive />
                  <Route exact path="/blog/:route" component={() => <Blog type={"Blog"} mainPath={'/blog'}/>} />
                  <Route exact path="/crypto-basic/:route" component={() => <Blog type={"CryptoBasic"} mainPath={'/crypto-basic'}/>} />
                  <Route exact path="/crypto-advanced/:route" component={() => <Blog type={"CryptoAdvanced"} mainPath={'/crypto-advanced'}/>} />
                  <Route exact path="/anonymous/:route" component={() => <Blog type={"/Anonymous"}  mainPath={'/anonymous'}/>} />
                  <Route strict exact path="/all-cards" component={() => <AllCards />} />
                  <Route strict exact path="/affiliate" component={() => <AffiliatePage /> } />
                  <Route strict exact path ="/public-faq" component={() => <PublicFaqOuter />} />
                  <Route exact path ="/categories/:faqCardRoute" component={() => <PublicFaqMiddle />} />
                  <Route exact path ="/articles/:faqArticleName" component={() => <PublicFaqInner/>} />
                  <Route exact path ="/public-faq-search-result/:keyword" component={() =><PublicFaqSearchedResult /> } />
                  <Route strict exact path ="/payment-widget" component={() => <PaymentPage/>} />
                  <Route exact path="/company" component={() =>
                      <div className={'center'}>
                        <h2>Company</h2>
                      </div>}
                  />
                  <Route exact path="/help" component={() =>
                      <div className={'center'}>
                        <h2>Help</h2>
                      </div>}
                  />
                  <Route exact path="/agreement" component={() =>
                      <div className={'center'}>
                        <h2>Agreement</h2>
                      </div>}
                  />
                  { routePages &&  routePages.map((page) => {
                    if (page.type === "Basic") {
                      return <Route key={page._id} exact path={'/' + page.route}
                        component={() => <Basic route={page.route}/>} />;
                    }
                    else if (page.type === "DesignedBasic"){
                      return <Route key={page._id} exact path={`/` + page.route}
                        component={() => <Blog designedRoute={page.route}/>} />;
                    }
                  })}
                  <Route exact path="/*" component={() => <PageNotFound /> } />
                </Switch>
              <Cookies />
              <IndexFooter />
            </Suspense>
        </Router>
      </>
    );
  }

  return null;
};

export default Routes;
