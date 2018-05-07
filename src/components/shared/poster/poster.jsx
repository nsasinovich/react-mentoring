import React from 'react';
import PropTypes from 'prop-types';

import './poster.scss';

const Poster = ({ posterSize, imgUrl }) => (
    <div className={`poster ${posterSize}`} >
        <img src={imgUrl} />
    </div>
);

Poster.propTypes = {
    posterSize: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default Poster;
