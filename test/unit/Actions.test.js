import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ActionTypes from 'src/constants/action_types';
import { SortingOptions } from 'src/constants/app_constants';
import {
    changeSort,
    updateSearchInput,
    updateResults,
    changeFilter,
    setSelectedMovie,
    resetSelectedMovie
} from 'src/actions/actions';

describe('Actions', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    it('should create an action to change sort', () => {
        const expectedAction = {
            type: ActionTypes.CHANGE_SORT,
            sort: SortingOptions.RELEASE,
        };

        expect(changeSort(SortingOptions.RELEASE)).toEqual(expectedAction);
    });

    it('should create an action to update input value', () => {
        const expectedAction = {
            type: ActionTypes.UPDATE_SEARCH_INPUT,
            input: 'test_value',
        };
        expect(updateSearchInput('test_value')).toEqual(expectedAction);
    });

    it('should create an action to update search results', () => {
        const mockResults = {
            data: [{ obj1: 1 }, { obj2: 2 }],
            total: 12,
        };

        const expectedAction = {
            type: ActionTypes.UPDATE_SEARCH_RESULTS,
            results: mockResults,
        };

        expect(updateResults(mockResults)).toEqual(expectedAction);
    });

    it('should create an action to update filter value', () => {
        const expectedAction = {
            type: ActionTypes.CHANGE_FILTER,
            filter: 'test_value',
        };
        expect(changeFilter('test_value')).toEqual(expectedAction);
    });

    it('should create an action to set selected movie', () => {
        const movieMock = { id: 'test' };

        const expectedAction = {
            type: ActionTypes.SET_SELECTED_MOVIE,
            movie: movieMock,
        };
        expect(setSelectedMovie(movieMock)).toEqual(expectedAction);
    });

    it('should create an action to reset selected movie', () => {
        const expectedAction = {
            type: ActionTypes.RESET_SELECTED_MOVIE,
        };
        expect(resetSelectedMovie()).toEqual(expectedAction);
    });
});
