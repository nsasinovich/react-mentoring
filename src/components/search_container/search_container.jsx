// @flow
import * as React from 'react';
import ResultsBar from '../results_bar/results_bar';
import SearchResultsList from '../search_results_list/search_results_list';

type Props = {
    children?: React.Node,
};

const SearchContainer = (props: Props) => (
    <div className="search-container">
        {props.children}
        <ResultsBar />
        <SearchResultsList />
    </div>
);

export default SearchContainer;

