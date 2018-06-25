// @flow
import React from 'react';
import { connect } from 'react-redux';
import AssetTile from '../asset_tile/asset_tile';
import NoResults from '../no_results/no_results';
import { selectResults, selectActiveSortField } from '../../selectors/app_selectors';
import SearchResultsErrorBoundary from './search_results_error_boundary/search_results_error_boundary';

import './search_results_list.scss';

type Props = {
    results: Array<Object>,
    sortField: string,
}

const SearchResultsList = (props: Props) => {
    const { results, sortField } = props;
    const formattedResults = results.map((res) => {
        res.year = new Date(res.release_date).getUTCFullYear();
        return res;
    });
    const sortedResults = formattedResults.sort((res1, res2) => res2[sortField] - res1[sortField]);

    const children = sortedResults.length ? sortedResults.map(asset => (
        <AssetTile
            key={asset.title}
            asset={asset}
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

SearchResultsList.defaultProps = {
    results: [],
};

const mapStateToProps = state => ({
    results: selectResults(state),
    sortField: selectActiveSortField(state),
});

export default connect(mapStateToProps)(SearchResultsList);
