import { createSelector } from 'reselect';

export const selectMovieDetails = createSelector(
    state => state.selectedMovieDetails,
    movieDetails => movieDetails,
);


export const selectResultsCount = createSelector(
    state => state.resultsCount,
    resultsCount => resultsCount,
);

export const selectActiveFilter = createSelector(
    state => state.selectedFilter,
    selectedFilter => selectedFilter,
);

export const selectActiveSort = createSelector(
    state => state.selectedSort,
    selectedSort => selectedSort,
);

export const selectActiveSortName = createSelector(
    selectActiveSort,
    selectedSort => selectedSort.name,
);

export const selectSearchInput = createSelector(
    state => state.searchInput,
    input => input,
);

export const selectResults = createSelector(
    state => state.results,
    results => results,
);

export const selectActiveSortField = createSelector(
    selectActiveSort,
    selectedSort => selectedSort.sortField,
);
