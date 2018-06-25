// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Poster from '../shared/poster/poster';
import Logo from '../shared/logo/logo';
import Button from '../shared/button/button';
import { resetSelectedMovie, fetchMovieById } from '../../actions/actions';
import { selectMovieDetails } from '../../selectors/app_selectors';
import { PosterSizes } from '../../constants/app_constants';

import './asset_details.scss';

type Props = {
    asset: {
        release_date: string,
        poster_path: string,
        title: string,
        runtime: string,
        overview: string,
        vote_average: number,
        genres: Array<string>,
        id: number,
    },
    match: {
        params: {
            assetId: number
        }
    },
    onSearchButtonClick: Function,
    fetchAssetDetails: Function,
}

class AssetDetails extends React.Component<Props> {
    componentWillMount() {
        const { assetId } = this.props.match.params;
        if (this.props.asset.id !== assetId) {
            this.props.fetchAssetDetails(assetId);
        }
    }

    render() {
        const { asset, onSearchButtonClick } = this.props;
        const year = asset.release_date && new Date(asset.release_date).getUTCFullYear();
        const runtime = asset.runtime ? `${asset.runtime} min` : null;
        const genres = asset.genres && asset.genres.join(', ');

        const header = (
            <div className="asset-details-header">
                <Logo className="asset-details-logo"/>
                <Link to='/search'>
                    <Button buttonClass="search-button button-white" onClick={onSearchButtonClick}>Search</Button>
                </Link>
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
    }
}

const mapDispatchToProps = {
    onSearchButtonClick: resetSelectedMovie,
    fetchAssetDetails: fetchMovieById,
};

const mapStateToProps = state => ({
    asset: selectMovieDetails(state),
});

AssetDetails.defaultProps = {
    asset: {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssetDetails));
