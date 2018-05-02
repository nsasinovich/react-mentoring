import React from 'react';
import PropTypes from 'prop-types';
import { PosterSizes } from '../../constants/app_constants';
import Poster from '../../components/shared/poster/poster';

import './asset_tile.scss';

const AssetTile = (props) => {
    const {
        posterUrl,
        year,
        title,
        genre,
    } = props;

    const poster = <Poster posterSize={PosterSizes.MEDIUM} imgUrl={posterUrl} />;

    const info = (
        <div className="asset-info">
            <div>
                <p className="title">{title}</p>
                <p className="genre">{genre}</p>
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
    posterUrl: PropTypes.string,
    year: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
};

// will be removed later
AssetTile.defaultProps = {
    posterUrl: 'https://cdn.miramax.com/media/assets/Pulp-Fiction1.png',
    year: 1995,
    title: 'Pulp Fiction',
    genre: 'Oscar-winning movies',
};

export default AssetTile;
