// @flow
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { SortingOptions, SortNames } from '../../constants/app_constants';

import './results_bar.scss';
import { changeSort } from '../../actions/actions';
import {
    selectResultsCount,
    selectActiveSort,
} from '../../selectors/app_selectors';

type StateProps = {
    count: number,
    selectedSort: string,
}

type DispatchProps = {
    changeCurrentSort: Function
}

type Props = StateProps & DispatchProps;

const ResultsBar = (props: Props) => {
    const { count, selectedSort, changeCurrentSort } = props;
    const resultsFoundMessage = `${count} movies found`;

    const sortingOptions = Object.values(SortNames).map((sort) => {
        const classes = classNames({ selected: sort === selectedSort });
        const onOptionClick = () => changeCurrentSort(sort);

        return (
            <li key={sort} className={classes} onClick={onOptionClick}>
                <p>{SortingOptions[sort].name}</p>
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
    selectedSort: selectActiveSort(state),
});

const mapDispatchToProps = {
    changeCurrentSort: changeSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);
