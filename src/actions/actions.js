import ActionTypes from '../constants/action_types';

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