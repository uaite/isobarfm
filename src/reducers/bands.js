import {
  SET_BANDS,
  SET_LOADING_BAND_LIST,
  SET_BANDS_ERROR,
  SET_BAND_LIST_FILTER,
} from '../actions/bands';

export const SORTING_MODES = {
  ALPHABETICAL: 'name',
  POPULARITY: 'numPlays',
};
const sorts = Object.values(SORTING_MODES);

const initialState = {
  list: [],
  filteredList: [],
  filter: '',
  sort: SORTING_MODES.ALPHABETICAL,
  ascending: true,
  isLoading: false,
  error: null,
};

const getFilteredList = ({ filter, sort, ascending }, { list }) => {
  let usingSort = sort;
  if (!sorts.includes(sort)) {
    usingSort = SORTING_MODES.ALPHABETICAL;
  }

  console.log('filtering list', list);

  const filteredList = list
    .filter(band => band.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (ascending) {
        return a[usingSort] - b[usingSort];
      } else {
        return b[usingSort] - a[usingSort];
      }
    });

  return filteredList;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BANDS:
      return {
        ...state,
        list: action.value,
        error: null,
      };
    case SET_LOADING_BAND_LIST:
      return {
        ...state,
        isLoading: action.value,
      };
    case SET_BANDS_ERROR:
      return {
        ...state,
        list: [],
        error: action.error,
        isLoading: false,
      };
    case SET_BAND_LIST_FILTER:
      return {
        ...state,
        filter: action.value.filter,
        sort: action.value.sort,
        ascending: action.value.ascending,
        filteredList: getFilteredList(action.value, state),
      };
    default:
      return state;
  }
};
