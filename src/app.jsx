import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';
import { FilterOptions } from './constants/app_constants';
import AssetTile from './components/asset_tile/asset_tile';
import Button from './components/shared/button/button';
import NoResults from './components/no_results/no_results';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Footer />
                <NoResults />

                <Button buttonClass='filter-button button-selected'>{FilterOptions.GENRE}</Button>
                <Button buttonClass='filter-button button-unselected'>{FilterOptions.TITLE}</Button>
                <Button buttonClass='search-button button-selected'>Search</Button>

                <AssetTile />
            </div>
        );
    }
}
