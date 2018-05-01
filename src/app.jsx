import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';
import SearchContainer from './components/search_container/search_container';

// import NoResults from './components/no_results/no_results';
// import AssetDetails from './components/asset_details/asset_details';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="content-wrapper">
                    <SearchContainer />
                </div>

                <Footer />
                {/* <AssetDetails /> */}
                {/* <NoResults /> */}
            </div>
        );
    }
}
