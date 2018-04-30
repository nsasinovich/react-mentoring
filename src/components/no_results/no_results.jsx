import React from 'react';

import './no_results.scss';

const NO_RESULTS_MESSAGE = 'No films found';

export default function NoResults() {
    return (
        <h3 className="empty-page">{NO_RESULTS_MESSAGE}</h3>
    );
}
