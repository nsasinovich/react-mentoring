import ActionTypes from '../constants/action_types';
import { INITIAL_STATE } from '../constants/app_constants';

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_SORT:
            return Object.assign({}, state, {
                selectedSort: action.sort,
            });
        case ActionTypes.CHANGE_FILTER:
            return Object.assign({}, state, {
                selectedFilter: action.filter,
            });
        case ActionTypes.UPDATE_SEARCH_INPUT:
            return Object.assign({}, state, {
                searchInput: action.input,
            });
        case ActionTypes.UPDATE_SEARCH_RESULTS:
            return Object.assign({}, state, {
                results: action.results.data,
                resultsCount: action.results.total,
            });
        case ActionTypes.SET_SELECTED_MOVIE:
            return Object.assign({}, state, {
                selectedMovieDetails: action.movie,
            });
        case ActionTypes.RESET_SELECTED_MOVIE:
            return Object.assign({}, state, {
                selectedMovieDetails: null,
            });
        default:
            return state;
    }
};

export default appReducer;
