import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SortingOptions } from '../../constants/app_constants';

import './results_bar.scss';

const ResultsBar = ({ count, currentSortName, onSortChange }) => {
    const resultsFoundMessage = `${count} movies found`;

    const sortingOptions = Object.values(SortingOptions).map((option) => {
        const classes = classNames({ selected: option.name === currentSortName });
        const onOptionClick = () => onSortChange(option);

        return (
            <li key={option.name} className={classes} onClick={onOptionClick}>
                <p>{option.name}</p>
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
    currentSortName: PropTypes.string,
    onSortChange: PropTypes.func,
};

ResultsBar.defaultProps = {
    count: 0,
};

export default ResultsBar;
