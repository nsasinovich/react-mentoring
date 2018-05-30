import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchHeader from '../search_header/search_header';
import ResultsBar from '../results_bar/results_bar';
import AssetDetails from '../asset_details/asset_details';
import SearchResultsList from '../search_results_list/search_results_list';

const SearchContainer = ({ selectedMovie }) => {
    const topPanel = selectedMovie ? <AssetDetails asset={selectedMovie}/> : <SearchHeader />;

    return (
        <div className="search-container">
            {topPanel}
            <ResultsBar />
            <SearchResultsList />
        </div>
    );
};

SearchContainer.propTypes = {
    selectedMovie: PropTypes.object,
};

const mapStateToProps = state => ({
    selectedMovie: state.selectedMovieDetails,
});

export default connect(mapStateToProps)(SearchContainer);

