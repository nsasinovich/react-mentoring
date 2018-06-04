import { call, put, takeLatest } from 'redux-saga/effects';
import ActionTypes from '../constants/action_types';
import { ENDPOINT } from '../constants/app_constants';

// ACTION CREATORS
export const changeSort = sort => ({
    type: ActionTypes.CHANGE_SORT,
    sort,
});

export const updateSearchInput = input => ({
    type: ActionTypes.UPDATE_SEARCH_INPUT,
    input,
});

export const updateResults = results => ({
    type: ActionTypes.UPDATE_SEARCH_RESULTS,
    results,
});

export const changeFilter = filter => ({
    type: ActionTypes.CHANGE_FILTER,
    filter,
});

export const setSelectedMovie = movie => ({
    type: ActionTypes.SET_SELECTED_MOVIE,
    movie,
});

export const resetSelectedMovie = () => ({
    type: ActionTypes.RESET_SELECTED_MOVIE,
});

export const fetchResults = ({ searchInput, selectedFilter }) => ({
    type: ActionTypes.FETCH_RESULTS,
    payload: {
        searchInput,
        selectedFilter,
    },
});

export const fetchMovieById = assetId => ({
    type: ActionTypes.FETCH_MOVIE_BY_ID,
    assetId,
});

// ACTIONS
export function* fetchResultsAsync(action) {
    const { searchInput, selectedFilter } = action.payload;
    const searchQuery = `search=${searchInput}&searchBy=${selectedFilter}`;

    const response = yield call(fetch, `${ENDPOINT}/movies?${searchQuery}`);
    const results = yield response.json();

    yield put(updateResults(results));
}

export function* watchFetchResults() {
    yield takeLatest(ActionTypes.FETCH_RESULTS, fetchResultsAsync);
}

export function* fetchMovieByIdAsync(action) {
    const response = yield call(fetch, `${ENDPOINT}/movies/${action.assetId}`);
    const asset = yield response.json();

    yield put(setSelectedMovie(asset));
}

export function* watchFetchMovieById() {
    yield takeLatest(ActionTypes.FETCH_MOVIE_BY_ID, fetchMovieByIdAsync);
}

