import React from 'react';
import PropTypes from 'prop-types';
import AssetTile from '../asset_tile/asset_tile';
import NoResults from '../no_results/no_results';
import SearchResultsErrorBoundary from './search_results_error_boundary/search_results_error_boundary';

import './search_results_list.scss';

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

export default class SearchResultsList extends React.Component {
    render() {
        const assets = this.props.results || resultAssets;

        const children = assets.length ? assets.map(asset => (
            <AssetTile
                key={asset.title}
                title={asset.title}
                posterUrl={asset.posterUrl}
                year={asset.year}
                genre={asset.genre}
            />
        )) : <NoResults />;

        return (
            <SearchResultsErrorBoundary>
                <div className="search-results-list">
                    {children}
                </div>
            </SearchResultsErrorBoundary>
        );
    }
}

SearchResultsList.propTypes = {
    results: PropTypes.array,
};

