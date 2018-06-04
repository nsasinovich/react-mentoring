import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import appReducer from './reducers/app_reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
    const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
};

