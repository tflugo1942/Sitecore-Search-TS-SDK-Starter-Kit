import React from 'react';

import ArticleCard from '@/widgets/components/ArticleCard';
import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';

const SEARCH_CONFIG = {
  source: import.meta.env.VITE_SEARCH_SOURCE,
};

export const HomeHighlightedComponent = (): JSX.Element => {
  const {
    widgetRef,
    actions: { onItemClick },
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults({
    query: (query) => {
      query.getRequest().setSearchFilter(new FilterEqual('type', 'equipment_catalog_content'));

      if (SEARCH_CONFIG.source != '') {
        query.getRequest().addSource(SEARCH_CONFIG.source);
      }
    },
  });
  const articlesToShow = articles.slice(0, 3);
  return (
    <div className="w-full flex justify-around text-gray-900 dark:text-gray-200 my-10">
      <div ref={widgetRef} className="grid grid-cols-3 gap-x-3 gap-y-3 w-[80%]">
        {articlesToShow.map((a, index) => (
          <ArticleCard article={a} key={index} index={index} onItemClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');
