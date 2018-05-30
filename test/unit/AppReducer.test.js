import appReducer from 'src/reducers/app_reducer';
import { INITIAL_STATE, FilterOptions } from 'src/constants/app_constants';
import ActionTypes from 'src/constants/action_types';


describe('reducer', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle change sort action', () => {
        const sort = {
            name: 'release date',
            sortField: 'year',
        };

        expect(appReducer(INITIAL_STATE, {
            type: ActionTypes.CHANGE_SORT,
            sort,
        })).toEqual({
            ...INITIAL_STATE,
            selectedSort: sort,
        });
    });

    it('should handle change filter action', () => {
        expect(appReducer(INITIAL_STATE, {
            type: ActionTypes.CHANGE_FILTER,
            filter: FilterOptions.GENRE,
        })).toEqual({
            ...INITIAL_STATE,
            selectedFilter: FilterOptions.GENRE,
        });
    });

    it('should handle update search input action', () => {
        const testInput = 'test_input';

        expect(appReducer(INITIAL_STATE, {
            type: ActionTypes.UPDATE_SEARCH_INPUT,
            input: testInput,
        })).toEqual({
            ...INITIAL_STATE,
            searchInput: testInput,
        });
    });

    it('should handle update search results action', () => {
        const results = {
            data: [{ obj1: 1 }, { obj2: 2 }],
            total: 12,
        };

        expect(appReducer(INITIAL_STATE, {
            type: ActionTypes.UPDATE_SEARCH_RESULTS,
            results,
        })).toEqual({
            ...INITIAL_STATE,
            results: results.data,
            resultsCount: results.total,
        });
    });

    it('should handle set selected movie action', () => {
        const selectedMovieDetails = { id: 'test' };

        expect(appReducer(INITIAL_STATE, {
            type: ActionTypes.SET_SELECTED_MOVIE,
            movie: selectedMovieDetails,
        })).toEqual({
            ...INITIAL_STATE,
            selectedMovieDetails,
        });
    });

    it('should handle reset selected movie action', () => {
        const state = {
            ...INITIAL_STATE,
            selectedMovieDetails: { id: 'test' },
        };

        expect(appReducer(state, {
            type: ActionTypes.RESET_SELECTED_MOVIE,
        })).toEqual({
            ...state,
            selectedMovieDetails: null,
        });
    });
});
