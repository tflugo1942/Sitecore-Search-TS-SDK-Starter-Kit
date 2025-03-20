"use client"
import { JSX } from 'react';

import { PAGE_EVENTS_HOME } from '@/app/data/constants';
import withPageTracking from '@/app/hocs/withPageTracking';
import HomeHighlighted from '@/app/widgets/HomeHighlighted';
import QuestionsAnswers from '@/app/widgets/QuestionsAnswers'
import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      <HTMBlockWidget rfkId="home_hero" />
      {/* <QuestionsAnswers
          rfkId="rfkid_qa"
          defaultKeyphrase="what does gilead sciences do?"
          defaultRelatedQuestions={2}
        />*/}
      <HomeHighlighted rfkId="search_home_highlight_articles" /> 
    </>
  );
};

export default withPageTracking(Home, PAGE_EVENTS_HOME);
