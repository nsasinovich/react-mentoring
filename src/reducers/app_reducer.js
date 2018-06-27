import { fromJS } from 'immutable';
import ActionTypes from '../constants/action_types';
import { INITIAL_STATE } from '../constants/app_constants';

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_SORT:
            return state.set('selectedSort', action.sort);
        case ActionTypes.CHANGE_FILTER:
            return state.set('selectedFilter', action.filter);
        case ActionTypes.UPDATE_SEARCH_INPUT:
            return state.set('searchInput', action.input);
        case ActionTypes.UPDATE_SEARCH_RESULTS:
            return state
                .set('results', fromJS(action.results.data))
                .set('resultsCount', action.results.total);
        case ActionTypes.SET_SELECTED_MOVIE:
            return state.set('selectedMovieDetails', fromJS(action.movie));
        case ActionTypes.RESET_SELECTED_MOVIE:
            return state.set('selectedMovieDetails', null);
        default:
            return state;
    }
};

export default appReducer;
