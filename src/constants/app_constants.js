import { fromJS } from 'immutable';

export const ENDPOINT = 'http://react-cdp-api.herokuapp.com';

export const PosterSizes = {
    LARGE: 'poster-large',
    MEDIUM: 'poster-medium',
};

export const FilterOptions = {
    GENRE: 'genres',
    TITLE: 'title',
};

export const SortNames = {
    RELEASE: 'RELEASE',
    RATING: 'RATING',
};

export const SortingOptions = {
    [SortNames.RELEASE]: {
        name: 'release date',
        sortField: 'year',
    },
    [SortNames.RATING]: {
        name: 'rating',
        sortField: 'vote_count',
    },
};

export const INITIAL_STATE = fromJS({
    results: [],
    resultsCount: 0,
    searchInput: '',
    selectedSort: SortNames.RATING,
    selectedFilter: FilterOptions.TITLE,
    selectedMovieDetails: {},
});
