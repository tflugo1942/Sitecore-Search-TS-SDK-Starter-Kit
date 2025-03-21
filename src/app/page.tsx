"use client"

import { JSX } from 'react'
import { PAGE_EVENTS_HOME } from '@/app/_data/constants';
import withPageTracking from '@/app/_hocs/withPageTracking';
import HomeHighlighted from '@/app/_widgets/HomeHighlighted';
import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers'
import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      <HTMBlockWidget rfkId="home_hero" />
      <QuestionsAnswers
          rfkId="rfkid_qa"
          defaultKeyphrase="what is sitecore?"
          defaultRelatedQuestions={2}
        />
      <HomeHighlighted rfkId="search_home_highlight_articles" />
      </>
  );
}

export default withPageTracking(Home, PAGE_EVENTS_HOME);
