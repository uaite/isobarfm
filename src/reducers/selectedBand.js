import {
  SET_SELECTED_BAND,
  SET_LOADING_SELECTED_BAND,
  SET_SELECTED_BAND_ERROR,
  SET_SELECTED_BAND_ID
} from "../actions/selectedBand";

const initialState = {
  band: {},
  isLoading: false,
  error: null,
  id: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_BAND:
      return {
        ...state,
        band: action.value,
        error: null
      };
    case SET_SELECTED_BAND_ID:
      return {
        ...state,
        id: action.value,
        error: null
      };
    case SET_LOADING_SELECTED_BAND:
      return {
        ...state,
        isLoading: action.value
      };
    case SET_SELECTED_BAND_ERROR:
      return {
        ...state,
        band: {},
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};
