import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedMovie } from '../../actions/actions';
import { PosterSizes } from '../../constants/app_constants';
import Poster from '../../components/shared/poster/poster';

import './asset_tile.scss';

const AssetTile = (props) => {
    const {
        asset,
        setMovieDetails,
    } = props;

    const year = new Date(asset.release_date).getUTCFullYear();
    const poster = <Poster posterSize={PosterSizes.MEDIUM} imgUrl={asset.poster_path} />;

    const info = (
        <div className="asset-info">
            <div>
                <Link className="title" to={`/details/${asset.id}`}>
                    <p onClick={() => setMovieDetails(asset)}>{asset.title}</p>
                </Link>
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
    setMovieDetails: PropTypes.func,
};

const mapDispatchToProps = {
    setMovieDetails: setSelectedMovie,
};

export default connect(null, mapDispatchToProps)(AssetTile);

