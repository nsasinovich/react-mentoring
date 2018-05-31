import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { store, persistor } from './store';
import App from './app';
import SearchContainer from './components/search_container/search_container';

const root = document.getElementById('root');

const NotFound = () => (<h1 className="not-found">Page not found</h1>);

ReactDOM.render(
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Redirect exact from="/" to="/search" />
                        <Route exact path="/search" component={SearchContainer} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    </PersistGate>,
    root,
);
