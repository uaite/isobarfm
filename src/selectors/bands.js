export const getBands = state => state.bands.list;
export const isBandListLoading = state => state.bands.isLoading;
export const getError = state => state.bands.error;

export const getFilteredBands = state => state.bands.filteredList;
export const getPages = state => state.bands.pages;
export const getFilter = state => state.bands.filter;
export const getSort = state => state.bands.sort;
export const getAscending = state => state.bands.ascending;
