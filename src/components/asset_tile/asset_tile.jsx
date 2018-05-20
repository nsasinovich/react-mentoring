import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../../actions/actions';
import { PosterSizes } from '../../constants/app_constants';
import Poster from '../../components/shared/poster/poster';

import './asset_tile.scss';

const AssetTile = (props) => {
    const {
        asset,
        showMovieDetails,
    } = props;

    const year = new Date(asset.release_date).getUTCFullYear();
    const poster = <Poster posterSize={PosterSizes.MEDIUM} imgUrl={asset.poster_path} />;

    const info = (
        <div className="asset-info">
            <div>
                <p className="title" onClick={() => showMovieDetails(asset)}>{asset.title}</p>
                <p className="genre">{asset.genres[0]}</p>
            </div>
            <p className="year">{year}</p>
        </div>
    );

    return (
        <div className='asset-tile'>
            {poster}
            {info}
        </div>
    );
};


AssetTile.propTypes = {
    asset: PropTypes.object,
    showMovieDetails: PropTypes.func,
};

const mapDispatchToProps = {
    showMovieDetails: setSelectedMovie,
};

export default connect(null, mapDispatchToProps)(AssetTile);

