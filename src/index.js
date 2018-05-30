import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import App from './app';

const root = document.getElementById('root');

ReactDOM.render(
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <App />
        </Provider>
    </PersistGate>,
    root,
);
