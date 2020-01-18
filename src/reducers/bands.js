import {
  SET_BANDS,
  SET_LOADING_BAND_LIST,
  SET_BANDS_ERROR,
} from '../actions/bands';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
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
    default:
      return state;
  }
};
