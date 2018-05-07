import React from 'react';

import './no_results.scss';

const NO_RESULTS_MESSAGE = 'No films found';

const NoResults = () => <h3 className="empty-page">{NO_RESULTS_MESSAGE}</h3>;

export default NoResults;
