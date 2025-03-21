"use client"
import { JSX } from 'react';

import ArticleCard from '@/app/_widgets/components/ArticleCard';
import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';

const SEARCH_CONFIG = {
  source: process.env.NEXT_PUBLIC_SEARCH_SOURCE as string,
};

export const HomeHighlightedComponent = (): JSX.Element => {
  const {
    actions: { onItemClick },
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults({
    query: (query) => {
      query.getRequest().setSearchFilter(new FilterEqual('type', 'website_content'));

      if (SEARCH_CONFIG.source != '') {
        query.getRequest().addSource(SEARCH_CONFIG.source);
      }
    },
  });
  const articlesToShow = articles.slice(0, 3);
  return (
    <>
    <p className="w-full flex justify-around text-gray-900 dark:text-gray-200 my-10 text-2xl">Highlighted Articles</p>
    <div className="w-full flex justify-around text-gray-900 dark:text-gray-200 my-10">
      
      <div className="grid grid-cols-3 gap-x-3 gap-y-3 w-[80%]">
        {articlesToShow.map((a, index) => (
          <ArticleCard article={a} key={index} index={index} onItemClick={onItemClick} />
        ))}
      </div>
    </div>
    </>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');
