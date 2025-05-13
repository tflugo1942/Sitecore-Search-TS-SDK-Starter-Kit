import React from 'react';

import { PAGE_EVENTS_HOME } from '@/data/constants';
import withPageTracking from '@/hocs/withPageTracking';
import HomeHighlighted from '@/widgets/HomeHighlighted';
import QuestionsAnswers from '@/widgets/QuestionsAnswers'
import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      <HTMBlockWidget rfkId="henry_schein_home_hero" />
      <QuestionsAnswers
          rfkId="rfkid_qa"
          defaultKeyphrase="what products and equipment does Henry Schein have?"
          defaultRelatedQuestions={4}
        />
      <HTMBlockWidget rfkId="highlight_title_henryschein" />
      <HomeHighlighted rfkId="search_home_highlight_articles" />
    </>
  );
};

export default withPageTracking(Home, PAGE_EVENTS_HOME);
