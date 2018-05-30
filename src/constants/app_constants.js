export const PosterSizes = {
    LARGE: 'poster-large',
    MEDIUM: 'poster-medium',
};

export const FilterOptions = {
    GENRE: 'genres',
    TITLE: 'title',
};

export const SortingOptions = {
    RELEASE: {
        name: 'release date',
        sortField: 'year',
    },
    RATING: {
        name: 'rating',
        sortField: 'vote_count',
    },
};

export const INITIAL_STATE = {
    results: [],
    resultsCount: 0,
    searchInput: '',
    selectedSort: SortingOptions.RATING,
    selectedFilter: FilterOptions.TITLE,
    selectedMovieDetails: null,
};
