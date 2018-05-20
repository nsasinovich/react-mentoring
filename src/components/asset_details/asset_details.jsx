import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../shared/poster/poster';
import Logo from '../shared/logo/logo';
import Button from '../shared/button/button';
import { PosterSizes } from '../../constants/app_constants';

import './asset_details.scss';

const AssetDetails = (props) => {
    const { asset } = props;
    const year = new Date(asset.release_date).getUTCFullYear();
    const runtime = asset.runtime ? `${asset.runtime} min` : null;
    const genres = asset.genres.join(', ');

    const header = (
        <div className="asset-details-header">
            <Logo className="asset-details-logo"/>
            <Button buttonClass="search-button button-white">Search</Button>
        </div>
    );

    const info = (
        <div className="asset-details">
            <Poster posterSize={PosterSizes.LARGE} imgUrl={asset.poster_path} />

            <div className="asset-info">
                <div className="wrapper">
                    <p className="title">{asset.title}</p>
                    <p className="rating">{asset.vote_average}</p>
                </div>

                <p className="genre">{genres}</p>

                <div className="wrapper">
                    <p className="year">{year}</p>
                    <p className="duration">{runtime}</p>
                </div>

                <p className="description">{asset.overview}</p>
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
    asset: PropTypes.object,
};

AssetDetails.defaultProps = {
    asset: {},
};


export default AssetDetails;
