// @flow
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { SortingOptions } from '../../constants/app_constants';

import './results_bar.scss';
import { changeSort } from '../../actions/actions';
import {
    selectResultsCount,
    selectActiveSortName,
} from '../../selectors/app_selectors';

type StateProps = {
    count: number,
    selectedSortName: string,
}

type DispatchProps = {
    changeCurrentSort: Function
}

type Props = StateProps & DispatchProps;

const ResultsBar = (props: Props) => {
    const { count, selectedSortName, changeCurrentSort } = props;
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

ResultsBar.defaultProps = {
    count: 0,
};

const mapStateToProps = state => ({
    count: selectResultsCount(state),
    selectedSortName: selectActiveSortName(state),
});

const mapDispatchToProps = {
    changeCurrentSort: changeSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);
