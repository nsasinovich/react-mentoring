import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

import configureStore from './configureStore';

const store = configureStore(window.PRELOADED_STATE);
const root = document.getElementById('root');

ReactDOM.hydrate(<App
    Router={BrowserRouter}
    store={store}
/>, root);
