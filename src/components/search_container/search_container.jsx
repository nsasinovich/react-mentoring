import React from 'react';
import SearchHeader from '../search_header/search_header';
import ResultsBar from '../results_bar/results_bar';
import SearchResultsList from '../search_results_list/search_results_list';

import './search_container.scss';

const resultAssets = [
    { title: 'Asset 1' },
    { title: 'Asset 2' },
    { title: 'Asset 3' },
    { title: 'Asset 4' },
    { title: 'Asset 5' },
    { title: 'Asset 6' },
    { title: 'Asset 7' },
    { title: 'Asset 8' },
    { title: 'Asset 9' },
];

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: resultAssets,
            // results: [],
        };
    }

    render() {
        const { results } = this.state;
        return (
            <div className="search-container">
                <SearchHeader />
                <ResultsBar count={results.length} />
                <SearchResultsList results={results} />
            </div>
        );
    }
}

