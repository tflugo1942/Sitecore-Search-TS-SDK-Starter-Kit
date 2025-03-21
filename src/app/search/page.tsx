"use client"
import { JSX } from 'react';
import { useSearchParams } from 'next/navigation';

import { PAGE_EVENTS_SEARCH } from '@/app/_data/constants';
import withPageTracking from '@/app/_hocs/withPageTracking';
import QuestionsAnswers from '@/app/_widgets/QuestionsAnswers';
import SearchResults from '@/app/_widgets/SearchResults';

const Search = (): JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';

  return (
    <div className="max-w-[1248px] m-auto pt-10">
      <div>
        <h2 className="text-gray-800 dark:text-gray-100 text-lg w-full text-left">{`Showing results for "${query}"`}</h2>
        <QuestionsAnswers
          key={`${query}-questions`}
          rfkId="rfkid_qa"
          defaultKeyphrase={query}
          defaultRelatedQuestions={4}
        />
        <SearchResults key={`${query}-search`} rfkId="rfkid_7" defaultKeyphrase={query} />
      </div>
    </div>
  );
};

export default withPageTracking(Search, PAGE_EVENTS_SEARCH);
