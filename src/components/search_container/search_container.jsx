import React from 'react';
import ResultsBar from '../results_bar/results_bar';
import SearchResultsList from '../search_results_list/search_results_list';

const SearchContainer = ({ children }) => (
    <div className="search-container">
        {children}
        <ResultsBar />
        <SearchResultsList />
    </div>
);

export default SearchContainer;

