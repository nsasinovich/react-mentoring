import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { Provider } from 'react-redux';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import './app.scss';
import Footer from './components/footer/footer';
import SearchContainer from './components/search_container/search_container';
import SearchHeader from './components/search_header/search_header';
import AssetDetails from './components/asset_details/asset_details';


const NotFound = () => <h1 className="not-found">Page not found</h1>;

class App extends React.Component {
    render() {
        const {
            Router,
            location,
            context,
            store,
        } = this.props;

        return (
            <Router location={location} context={context}>
                <div className="app">
                    <div className="content-wrapper">
                        <Provider store={store}>
                            <Switch>
                                <Redirect exact from="/" to="/search" />

                                <Route exact path="/search">
                                    <SearchContainer>
                                        <SearchHeader />
                                    </SearchContainer>
                                </Route>

                                <Route exact path="/details/:assetId">
                                    <SearchContainer>
                                        <AssetDetails />
                                    </SearchContainer>
                                </Route>
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </Provider>
                    </div>

                    <Footer />
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
    location: PropTypes.object,
    store: PropTypes.object.isRequired,
};

export default hot(module)(App);
