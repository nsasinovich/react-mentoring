import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SortingOptions } from '../../constants/app_constants';

import './results_bar.scss';
import { changeSort } from '../../action_creators/action_creators';

const ResultsBar = ({ count, selectedSortName, changeCurrentSort }) => {
    const resultsFoundMessage = `${count} movies found`;

    const sortingOptions = Object.values(SortingOptions).map((sort) => {
        const classes = classNames({ selected: sort.name === selectedSortName });
        const onOptionClick = () => changeCurrentSort(sort);

        return (
            <li key={sort.name} className={classes} onClick={onOptionClick}>
                <p>{sort.name}</p>
            </li>
        );
    });

    return (
        <div className="results-bar">
            <p className="results-count">{resultsFoundMessage}</p>
            <div className="results-sorting">
                <p>Sort by</p>
                <ul className="sorting-options">
                    {sortingOptions}
                </ul>
            </div>
        </div>
    );
};

ResultsBar.propTypes = {
    count: PropTypes.number,
    selectedSortName: PropTypes.string,
    changeCurrentSort: PropTypes.func,
};

ResultsBar.defaultProps = {
    count: 0,
};

const mapStateToProps = state => ({
    count: state.results.length,
    selectedSortName: state.selectedSort.name,
});

const mapDispatchToProps = dispatch => ({
    changeCurrentSort: sort => dispatch(changeSort(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);
