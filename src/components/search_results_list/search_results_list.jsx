import React from 'react';
import AssetTile from '../asset_tile/asset_tile';

import './search_results_list.scss';

const assets = [
    { title: 'Asset 1' },
    { title: 'Asset 2' },
    { title: 'Asset 3' },
    { title: 'Asset 4' },
    { title: 'Asset 5' },
    { title: 'Asset 6' },
    { title: 'Asset 7' },
    { title: 'Asset 8' },
    { title: 'Asset 9' },
];

export default class SearchResultsList extends React.Component {
    render() {
        const children = assets.map(asset => (
            <AssetTile
                key={asset.title}
                title={asset.title}
                posterUrl={asset.posterUrl}
                year={asset.year}
                genre={asset.genre}
            />
        ));
        return (
            <div className="search-results-list">
                {children}
            </div>
        );
    }
}
