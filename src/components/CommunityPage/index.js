import React from 'react';

import { CommunityFirst } from './CommunityFirst';
import { CommunitySecond } from './CommunitySecond';
import { CommunityThird } from './CommunityThird';
import { CommunityFourth } from './CommunityForth';
import { CommunityFifth } from './CommunityFifth';

import './style.css';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import { siteCanonical, siteDescriptions, siteTitles } from '../../utils/helpers';

export const CommunityPage = () => {
  return (
    <>
      <CustomHelmet title={siteTitles.community} description={siteDescriptions.community} canonical={siteCanonical.community} />
      <CommunityFirst />
      <CommunitySecond />
      <CommunityThird />
      <CommunityFourth />
      <CommunityFifth />
    </>
  );
};

export { CommunityPage as default } from './index'
