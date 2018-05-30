import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchInput } from '../../../actions/actions';
import arrowIcon from '../../../images/arrow.png';

import './search_input.scss';

const INPUT_PLACEHOLDER = 'Let\'s find your movie';

const SearchInput = ({ searchInput, updateSearchInputValue, onEnterKey }) => (
    <div className="search-input-wrapper">
        <input
            className="search-input"
            value={searchInput}
            placeholder={INPUT_PLACEHOLDER}
            onChange={event => updateSearchInputValue(event.target.value)}
            onKeyPress={event => event.key === 'Enter' && onEnterKey()}
        />
        <img src={arrowIcon} />
    </div>
);

SearchInput.propTypes = {
    searchInput: PropTypes.string,
    updateSearchInputValue: PropTypes.func,
    onEnterKey: PropTypes.func,

};

const mapStateToProps = state => ({
    searchInput: state.searchInput,
});

const mapDispatchToProps = dispatch => ({
    updateSearchInputValue: input => dispatch(updateSearchInput(input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
