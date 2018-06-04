import { all } from 'redux-saga/effects';
import {
    watchFetchResults,
    watchFetchMovieById,
} from './actions/actions';

function* moviesSaga() {
    yield all([
        watchFetchResults(),
        watchFetchMovieById(),
    ]);
}

export function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
}
