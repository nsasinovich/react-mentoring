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

// ACTIONS
export const fetchResults = ({ searchInput, selectedFilter }) => (dispatch) => {
    const searchQuery = `search=${searchInput}&searchBy=${selectedFilter}`;

    return fetch(`${ENDPOINT}/movies?${searchQuery}`)
        .then(response => response.json())
        .then(json => dispatch(updateResults(json)))
        .catch((e) => {
            console.error('SearchHeader', 'findMovies()', e);

            return dispatch(updateSearchInput({
                input: '',
            }));
        });
};

export const loadAsset = assetId => dispatch =>
    fetch(`${ENDPOINT}/movies/${assetId}`)
        .then(response => response.json())
        .then(json => dispatch(setSelectedMovie(json)))
        .catch((e) => {
            console.error('AssetDetails', 'loadAsset()', e);

            return dispatch(setSelectedMovie({
                movie: {},
            }));
        });

