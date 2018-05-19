import React from 'react';
import SearchHeader from '../search_header/search_header';
import ResultsBar from '../results_bar/results_bar';
import SearchResultsList from '../search_results_list/search_results_list';

const SearchContainer = () => (
    <div className="search-container">
        <SearchHeader />
        <ResultsBar />
        <SearchResultsList />
    </div>
);

export default SearchContainer;

