// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedMovie } from '../../actions/actions';
import { PosterSizes } from '../../constants/app_constants';
import Poster from '../../components/shared/poster/poster';

import './asset_tile.scss';

type Props = {
    asset: {
        release_date: string,
        poster_path: string,
        title: string,
        genres: Array<string>,
        id: number,
    },
    setMovieDetails: Function,
};


const AssetTile = (props: Props) => {
    const {
        asset,
        setMovieDetails,
    } = props;

    const year = new Date(asset.get('release_date')).getUTCFullYear();
    const poster = <Poster posterSize={PosterSizes.MEDIUM} imgUrl={asset.get('poster_path')} />;

    const info = (
        <div className="asset-info">
            <div>
                <Link className="title" to={`/details/${asset.get('id')}`}>
                    <p onClick={() => setMovieDetails(asset)}>{asset.get('title')}</p>
                </Link>
                <p className="genre">{asset.getIn(['genres', 0])}</p>
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

const mapDispatchToProps = {
    setMovieDetails: setSelectedMovie,
};

export default connect(null, mapDispatchToProps)(AssetTile);

