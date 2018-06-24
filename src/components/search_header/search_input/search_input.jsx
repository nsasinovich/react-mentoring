// @flow
import React from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { updateSearchInput } from '../../../actions/actions';
import arrowIcon from '../../../images/arrow.png';

import './search_input.scss';

const INPUT_PLACEHOLDER = 'Let\'s find your movie';

type StateProps = {
    searchInput: string,
};

type DispatchProps = {
    updateSearchInputValue: Function,
    onEnterKey: Function,
}

type Props = StateProps & DispatchProps;

const SearchInput = (props: Props) => (
    <div className="search-input-wrapper">
        <input
            className="search-input"
            value={props.searchInput}
            placeholder={INPUT_PLACEHOLDER}
            onChange={event => props.updateSearchInputValue(event.target.value)}
            onKeyPress={event => event.key === 'Enter' && props.onEnterKey()}
        />
        <img src={arrowIcon} />
    </div>
);

const mapStateToProps = (state): StateProps => ({
    searchInput: state.searchInput,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
    updateSearchInputValue: input => dispatch(updateSearchInput(input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
