import * as bandsAPI from "../services/bands";

export const fetchBands = () => {
  return dispatch => {
    dispatch(setLoadingBandList(true));

    bandsAPI
      .list()
      .then(response => {
        const bands = response.data;
        dispatch(setBands(bands));

        dispatch(setLoadingBandList(false));
      })
      .catch(err => {
        dispatch(setBandsError(err));
      });
  };
};

export const SET_BANDS = "SET_BANDS";
export const setBands = heroes => {
  return { type: SET_BANDS, value: heroes };
};

export const SET_LOADING_BAND_LIST = "SET_LOADING_BAND_LIST";
export const setLoadingBandList = isLoading => {
  return { type: SET_LOADING_BAND_LIST, value: isLoading };
};

export const SET_BANDS_ERROR = "SET_BANDS_ERROR";
export const setBandsError = error => {
  return { type: SET_BANDS_ERROR, error };
};
