import React from 'react';
import PropTypes from 'prop-types';
import defaultPoster from '../../../images/no_poster.png';
import { PosterSizes } from '../../../constants/app_constants';

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

Poster.defaultProps = {
    posterSize: PosterSizes.MEDIUM,
    imgUrl: defaultPoster,
};

export default Poster;
