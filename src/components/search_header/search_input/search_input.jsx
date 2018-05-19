import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchInput } from '../../../action_creators/action_creators';
import arrowIcon from '../../../images/arrow.png';

import './search_input.scss';

const INPUT_PLACEHOLDER = 'Let\'s find your movie';

const SearchInput = ({ updateSearchInputValue, input }) => (
    <div className="search-input-wrapper">
        <input
            className="search-input"
            placeholder={INPUT_PLACEHOLDER}
            onChange={event => {updateSearchInputValue(event.target.value)}}
        />
        <img src={arrowIcon} />
    </div>
);

SearchInput.propTypes = {
    updateSearchInputValue: PropTypes.func,
};

const mapStateToProps = state => ({
    input: state.searchInput
});

const mapDispatchToProps = dispatch => ({
    updateSearchInputValue: input => dispatch(updateSearchInput(input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
