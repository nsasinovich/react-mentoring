import React from 'react';
import Logo from '../shared/logo/logo';
import SearchInput from './search_input/search_input';
import Button from '../../components/shared/button/button';
import { FilterOptions } from '../../constants/app_constants';

import './search_header.scss';

const FIND_MOVIE_MESSAGE = 'Find your movie';
const SEARCH_BUTTON_MESSAGE = 'Search';
const SEARCH_BY_MESSAGE = 'Search by';

export default class SearchHeader extends React.Component {
    render() {
        const searchActions = (
            <div className="button-group">
                <div className="filter-buttons">
                    <p className="search-by">{SEARCH_BY_MESSAGE}</p>
                    <Button buttonClass="filter-button button-red">{FilterOptions.GENRE}</Button>
                    <Button buttonClass="filter-button button-grey">{FilterOptions.TITLE}</Button>
                </div>
                <Button buttonClass="search-button button-red">{SEARCH_BUTTON_MESSAGE}</Button>
            </div>
        );

        return (
            <div className="search-header">
                <Logo />
                <h2 className="find-movie">{FIND_MOVIE_MESSAGE}</h2>
                <SearchInput />
                {searchActions}
            </div>
        );
    }
}
