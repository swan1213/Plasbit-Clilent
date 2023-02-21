import React from 'react';
import { Trans as T } from 'react-i18next';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteCanonical, siteDescriptions, siteTitles } from '../../utils/helpers';
import { SecurityCard } from './Card';
import { SecurityThird } from './securityThird';
import { SecuritySecond } from './securitySecond';
import { SecurityFirst} from './securityFirst';
import { SecurityFifth } from './securityFifth';
import { SecurityFourth } from './securityFourth';
import './style.css';


const cardContents = [
  {
    id: 1,
    title: <T>securityPage.third.title.0</T>,
    image: 'security/storage.png',
    text: <T>securityPage.third.text.0</T>,
  },
  {
    id: 2,
    title: <T>securityPage.third.title.1</T>,
    image: 'security/hotwallet.png',
    text: <T>securityPage.third.text.1</T>,
  },
  {
    id: 3,
    title: <T>securityPage.third.title.2</T>,
    image: 'security/accounts.png',
    text: <T>securityPage.third.text.2</T>,
  },
  {
    id: 4,
    title: <T>securityPage.third.title.3</T>,
    image: 'security/privilege.png',
    text: <T>securityPage.third.text.3</T>,
  },
];

export const SecurityPage = () => {
  return (
    <>
    
      <CustomHelmet title={siteTitles.security} description={siteDescriptions.security} canonical={siteCanonical.security}/>
      
      <div className="security-page">
        <SecurityFirst />
        <SecuritySecond />
        <SecurityThird/>
        <div className="security-cards">
          {
                  cardContents.map((cardContent) => (
                    <SecurityCard key={cardContent.id.toString()} cardContent={cardContent} />
                  ))
              }
        </div>
        <SecurityFourth />
        <SecurityFifth />
      </div>
    </>
  );
};

export { SecurityPage as default } from './index';
