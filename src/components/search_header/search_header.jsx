import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import Logo from '../shared/logo/logo';
import SearchInput from './search_input/search_input';
import Button from '../../components/shared/button/button';
import { fetchResults, changeFilter, updateSearchInput } from '../../actions/actions';
import { FilterOptions } from '../../constants/app_constants';

import './search_header.scss';

const FIND_MOVIE_MESSAGE = 'Find your movie';
const SEARCH_BUTTON_MESSAGE = 'Search';
const SEARCH_BY_MESSAGE = 'Search by';

class SearchHeader extends React.Component {
    componentWillMount() {
        const params = new URLSearchParams(this.props.location.search);

        this.props.updateSearchInputValue(params.get('search'));
        this.props.fetchSearchResults({
            searchInput: params.get('search'),
            selectedFilter: params.get('searchBy'),
        });
    }

    render() {
        const {
            searchInput,
            selectedSort,
            selectedFilter,
            fetchSearchResults,
        } = this.props;

        const doSearch = () => {
            this.props.history.push(`/search?search=${searchInput}&searchBy=${selectedFilter}`);
            fetchSearchResults({ searchInput, selectedFilter, selectedSort });
        };

        const filterOptions = Object.values(FilterOptions).map((filter) => {
            const classes = classNames('filter-button', {
                'button-red': filter === this.props.selectedFilter,
                'button-grey': filter !== this.props.selectedFilter,
            });
            const onOptionClick = () => this.props.changeCurrentFilter(filter);

            return (
                <Button
                    key={filter}
                    buttonClass={classes}
                    onClick={onOptionClick}>
                    {filter}</Button>
            );
        });

        const searchActions = (
            <div className="button-group">
                <div className="filter-buttons">
                    <p className="search-by">{SEARCH_BY_MESSAGE}</p>
                    {filterOptions}
                </div>
                <Button
                    buttonClass="search-button button-red"
                    onClick={doSearch}
                >{SEARCH_BUTTON_MESSAGE}</Button>
            </div>
        );

        return (
            <div className="search-header">
                <Logo />
                <h2 className="find-movie">{FIND_MOVIE_MESSAGE}</h2>
                <SearchInput onEnterKey={doSearch} />
                {searchActions}
            </div>
        );
    }
}

SearchHeader.propTypes = {
    searchInput: PropTypes.string,
    selectedFilter: PropTypes.string,
    selectedSort: PropTypes.object,
    fetchSearchResults: PropTypes.func,
    changeCurrentFilter: PropTypes.func,
    updateSearchInputValue: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
};

const mapStateToProps = state => ({
    searchInput: state.searchInput,
    selectedFilter: state.selectedFilter,
    selectedSort: state.selectedSort,
});

const mapDispatchToProps = {
    fetchSearchResults: fetchResults,
    changeCurrentFilter: changeFilter,
    updateSearchInputValue: updateSearchInput,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchHeader));
