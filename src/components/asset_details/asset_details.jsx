import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../shared/poster/poster';
import Logo from '../shared/logo/logo';
import Button from '../shared/button/button';
import { PosterSizes } from '../../constants/app_constants';

import './asset_details.scss';

const AssetDetails = (props) => {
    const {
        posterUrl,
        title,
        rating,
        genre,
        year,
        duration,
        description,
    } = props;

    const header = (
        <div className="asset-details-header">
            <Logo className="asset-details-logo"/>
            <Button buttonClass="search-button button-white">Search</Button>
        </div>
    );

    const info = (
        <div className="asset-details">
            <Poster posterSize={PosterSizes.LARGE} imgUrl={posterUrl} />

            <div className="asset-info">
                <div className="wrapper">
                    <p className="title">{title}</p>
                    <p className="rating">{rating}</p>
                </div>

                <p className="genre">{genre}</p>

                <div className="wrapper">
                    <p className="year">{year}</p>
                    <p className="duration">{`${duration} min`}</p>
                </div>

                <p className="description">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="asset-details-container">
            {header}
            {info}
        </div>
    );
};

AssetDetails.propTypes = {
    posterUrl: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string,
};

// will be removed later
AssetDetails.defaultProps = {
    title: 'Pulp Fiction',
    rating: 4.7,
    genre: 'Oscar-winning Movies',
    year: 1995,
    duration: 113,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export default AssetDetails;
