import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';
import SearchHeader from './components/search_header/search_header';
import ResultsBar from './components/results_bar/results_bar';
import SearchResultsList from './components/search_results_list/search_results_list';

// import NoResults from './components/no_results/no_results';
// import AssetDetails from './components/asset_details/asset_details';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="content-wrapper">
                    <SearchHeader />
                    <ResultsBar count={3} />
                    <SearchResultsList />
                </div>

                <Footer />
                {/* <AssetDetails /> */}
                {/* <NoResults /> */}
            </div>
        );
    }
}
