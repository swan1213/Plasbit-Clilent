import React from 'react';
import { Trans as T } from 'react-i18next';

import './Fifth.css';
import { Accordion } from '../Accordion';

const faqs = [
  {
    title: 'affiliatePage.fifth.faqs.first.question',
    text: 'affiliatePage.fifth.faqs.first.answer'
  },
  {
    title: 'affiliatePage.fifth.faqs.second.question',
    text: 'affiliatePage.fifth.faqs.second.answer',
  },
  {
    title: 'affiliatePage.fifth.faqs.third.question',
    text: 'affiliatePage.fifth.faqs.third.answer',
  },
  {
    title: 'affiliatePage.fifth.faqs.fourth.question',
    text: 'affiliatePage.fifth.faqs.fourth.answer',
  },
  {
    title: 'affiliatePage.fifth.faqs.fifth.question',
    text: 'affiliatePage.fifth.faqs.fifth.answer',
  },
  {
    title: 'affiliatePage.fifth.faqs.sixth.question',
    text: 'affiliatePage.fifth.faqs.sixth.answer',
  },
  {
    title: 'affiliatePage.fifth.faqs.seventh.question',
    text: 'affiliatePage.fifth.faqs.seventh.answer',
  },
];

export const AffiliateFifth = () => (
  <section className="affiliate_fifth text_center">
    <div className="title">
      <T>affiliatePage.fifth.title</T>
    </div>
    <div className="faqs">
      {faqs.map((faq, index) => (
        <Accordion obj={faq} key={index} arrow />
      ))}
    </div>
  </section>
);
