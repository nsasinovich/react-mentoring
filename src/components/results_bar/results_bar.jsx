import React from 'react';
import PropTypes from 'prop-types';
import { SortingOptions } from '../../constants/app_constants';

import './results_bar.scss';

const ResultsBar = ({ count }) => {
    const resultsFoundMessage = `${count} movies found`;

    return (
        <div className="results-bar">
            <p className="results-count">{resultsFoundMessage}</p>
            <div className="results-sorting">
                <p>Sort by</p>
                <ul className="sorting-options">
                    <li><p>{SortingOptions.RATING}</p></li>
                    <li className="selected"><p>{SortingOptions.RELEASE}</p></li>
                </ul>
            </div>
        </div>
    );
};

ResultsBar.propTypes = {
    count: PropTypes.number,
};

ResultsBar.defaultProps = {
    count: 0,
};

export default ResultsBar;
