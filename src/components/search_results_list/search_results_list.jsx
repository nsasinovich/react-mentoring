import React from 'react';
import PropTypes from 'prop-types';
import AssetTile from '../asset_tile/asset_tile';
import NoResults from '../no_results/no_results';
import SearchResultsErrorBoundary from './search_results_error_boundary/search_results_error_boundary';

import './search_results_list.scss';

const SearchResultsList = ({ results, sortField }) => {
    const sortedResults = results.sort((res1, res2) => res2[sortField] - res1[sortField]);

    const children = sortedResults.length ? sortedResults.map(asset => (
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
};

SearchResultsList.propTypes = {
    results: PropTypes.array,
    sortField: PropTypes.string,
};

export default SearchResultsList;
