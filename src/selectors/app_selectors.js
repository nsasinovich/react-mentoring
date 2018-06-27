import { createSelector } from 'reselect';
import { SortingOptions } from '../constants/app_constants';

export const selectMovieDetails = createSelector(
    state => state.get('selectedMovieDetails'),
    movieDetails => movieDetails,
);


export const selectResultsCount = createSelector(
    state => state.get('resultsCount'),
    resultsCount => resultsCount,
);

export const selectActiveFilter = createSelector(
    state => state.get('selectedFilter'),
    selectedFilter => selectedFilter,
);

export const selectActiveSort = createSelector(
    state => state.get('selectedSort'),
    selectedSort => selectedSort,
);

export const selectSearchInput = createSelector(
    state => state.get('searchInput'),
    input => input,
);

export const selectResults = createSelector(
    state => state.get('results'),
    results => results,
);

export const selectActiveSortField = createSelector(
    selectActiveSort,
    selectedSort => SortingOptions[selectedSort].sortField,
);
