import React from 'react';
import { SortingOptions } from '../../constants/app_constants';
import SearchHeader from '../search_header/search_header';
import ResultsBar from '../results_bar/results_bar';
import SearchResultsList from '../search_results_list/search_results_list';

const resultAssets = [
    { title: 'Asset 1', year: 1995, rating: 1 },
    { title: 'Asset 2', year: 1994, rating: 3.53 },
    { title: 'Asset 3', year: 1993, rating: 3.55 },
    { title: 'Asset 4', year: 1992, rating: 3.6 },
    { title: 'Asset 5', year: 1991, rating: 3.7 },
    { title: 'Asset 6', year: 1990, rating: 3.8 },
    { title: 'Asset 7', year: 1990, rating: 3.9 },
    { title: 'Asset 8', year: 1989, rating: 4 },
    { title: 'Asset 9', year: 1988, rating: 5 },
];

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: resultAssets, // results: [],
            currentSort: SortingOptions.RATING,
        };

        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSortChange(SortingOption) {
        this.setState({ currentSort: SortingOption });
    }

    render() {
        const { results, currentSort } = this.state;
        return (
            <div className="search-container">
                <SearchHeader />
                <ResultsBar
                    count={results.length}
                    onSortChange={this.handleSortChange}
                    currentSortName={currentSort.name}
                />
                <SearchResultsList results={results} sortField={currentSort.sortingField}/>
            </div>
        );
    }
}

