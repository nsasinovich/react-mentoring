// @flow
import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import AssetTile from '../asset_tile/asset_tile';
import NoResults from '../no_results/no_results';
import { selectResults, selectActiveSortField } from '../../selectors/app_selectors';
import SearchResultsErrorBoundary from './search_results_error_boundary/search_results_error_boundary';

import './search_results_list.scss';

type Props = {
    results: List<Object>,
    sortField: string,
}

const SearchResultsList = (props: Props) => {
    const { results, sortField } = props;

    const formattedResults = results.map(res =>
        res.set('year', new Date(res.get('release_date')).getUTCFullYear()));
    const sortedResults = formattedResults.sort((res1, res2) =>
        res2.get(sortField) - res1.get(sortField));

    const children = sortedResults.size ? sortedResults.map(asset => (
        <AssetTile
            key={asset.get('title')}
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
    results: List(),
};

const mapStateToProps = state => ({
    results: selectResults(state),
    sortField: selectActiveSortField(state),
});

export default connect(mapStateToProps)(SearchResultsList);
