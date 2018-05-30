import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app_reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware),
);

const persistor = persistStore(store);

export { store, persistor };
