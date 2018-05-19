import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/app_reducer';
import App from './app';

const store = createStore(appReducer);
window.store = store; // will be removed

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root,
);
