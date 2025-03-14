"use client"

import { JSX } from 'react'
import { useParams } from 'react-router-dom';

import { PAGE_EVENTS_PDP } from '@/app/data/constants';
import withPageTracking from '@/app/hocs/withPageTracking';
import ArticleDetailWidget from '@/app/widgets/ArticleDetail';

const ArticleDetail = (): JSX.Element => {
  const { id } = useParams();
  return <ArticleDetailWidget key={id} id={id} rfkId="rfkid_7" />;
};

export default withPageTracking(ArticleDetail, PAGE_EVENTS_PDP);
