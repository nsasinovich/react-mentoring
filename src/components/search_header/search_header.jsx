import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Logo from '../shared/logo/logo';
import SearchInput from './search_input/search_input';
import Button from '../../components/shared/button/button';
import { updateResults, changeFilter } from '../../actions/actions';
import { FilterOptions } from '../../constants/app_constants';

import './search_header.scss';

const FIND_MOVIE_MESSAGE = 'Find your movie';
const SEARCH_BUTTON_MESSAGE = 'Search';
const SEARCH_BY_MESSAGE = 'Search by';

class SearchHeader extends React.Component {
    findMovies() {
        const {
            searchInput,
            sortOption,
            selectedFilter,
            updateSearchResults,
        } = this.props;

        const endpoint = 'http://react-cdp-api.herokuapp.com';
        const searchQuery = `search=${searchInput}&searchBy=${selectedFilter}`;

        return fetch(`${endpoint}/movies?${searchQuery}`)
            .then(response => response.json())
            .then(json => updateSearchResults(json))
            .catch(e => console.error('SearchHeader', 'findMovies()', e));
    }

    render() {
        const onSearchSubmit = this.findMovies.bind(this);

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
                    onClick={onSearchSubmit}
                >{SEARCH_BUTTON_MESSAGE}</Button>
            </div>
        );

        return (
            <div className="search-header">
                <Logo />
                <h2 className="find-movie">{FIND_MOVIE_MESSAGE}</h2>
                <SearchInput onEnterKey={onSearchSubmit}/>
                {searchActions}
            </div>
        );
    }
}

SearchHeader.propTypes = {
    searchInput: PropTypes.string,
    sortOption: PropTypes.string,
    selectedFilter: PropTypes.string,
    updateSearchResults: PropTypes.func,
    changeCurrentFilter: PropTypes.func,
};

const mapStateToProps = state => ({
    searchInput: state.searchInput,
    sortOption: state.selectedSort.name,
    selectedFilter: state.selectedFilter,
});

const mapDispatchToProps = {
    updateSearchResults: updateResults,
    changeCurrentFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
