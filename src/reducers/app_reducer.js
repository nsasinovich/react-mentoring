import ActionTypes from '../constants/action_types';
import { SortingOptions } from '../constants/app_constants';

// const resultAssets = [
//     { title: 'Asset 1', year: 1995, rating: 1 },
//     { title: 'Asset 2', year: 1994, rating: 3.53 },
//     { title: 'Asset 3', year: 1993, rating: 3.55 },
//     { title: 'Asset 4', year: 1992, rating: 3.6 },
//     { title: 'Asset 5', year: 1991, rating: 3.7 },
//     { title: 'Asset 6', year: 1990, rating: 3.8 },
//     { title: 'Asset 7', year: 1990, rating: 3.9 },
//     { title: 'Asset 8', year: 1989, rating: 4 },
//     { title: 'Asset 9', year: 1988, rating: 5 },
// ];

const initialState = {
    results: [],
    searchInput: '',
    selectedSort: SortingOptions.RATING,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_SORT:
            return Object.assign({}, state, {
                selectedSort: action.sort,
            });
        case ActionTypes.UPDATE_SEARCH_INPUT:
            return Object.assign({}, state, {
                searchInput: action.input,
            });
        default:
            return state;
    }
};

export default appReducer;
