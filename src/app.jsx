import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';
import AssetTile from './components/asset_tile/asset_tile';
import NoResults from './components/no_results/no_results';
import SearchHeader from './components/search_header/search_header';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <SearchHeader />
                <Footer />
                <NoResults />
                <AssetTile />
            </div>
        );
    }
}
