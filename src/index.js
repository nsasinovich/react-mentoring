import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app_reducer';
import App from './app';

const store = createStore(
    appReducer,
    applyMiddleware(thunkMiddleware),
);

window.store = store; // will be removed

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root,
);
