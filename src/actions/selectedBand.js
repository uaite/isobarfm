import * as bandsAPI from "../services/bands";

import * as albumActions from "./albums";

export const fetchBandByID = id => {
  return (dispatch, getState) => {
    dispatch(setLoadingSelectedBand(true));

    const state = getState();

    if (state.bands.list) {
      const band = state.bands.list.find(band => band.id === id);
      if (band) {
        dispatch(setSelectedBand(band));

        dispatch(setLoadingSelectedBand(false));
      }
    }

    bandsAPI
      .bandByID(id)
      .then(response => {
        const band = response.data;
        dispatch(setSelectedBand(band));
        dispatch(albumActions.fetchAlbumsForBand(band));

        dispatch(setLoadingSelectedBand(false));
      })
      .catch(err => {
        dispatch(setSelectedBandError(err));
      });
  };
};

export const SET_SELECTED_BAND = "SET_SELECTED_BAND";
export const setSelectedBand = selectedBand => {
  return { type: SET_SELECTED_BAND, value: selectedBand };
};

export const SET_SELECTED_BAND_ID = "SET_SELECTED_BAND_ID";
export const setSelectedBandID = id => {
  return { type: SET_SELECTED_BAND_ID, value: id };
};

export const SET_LOADING_SELECTED_BAND = "SET_LOADING_SELECTED_BAND";
export const setLoadingSelectedBand = isLoading => {
  return { type: SET_LOADING_SELECTED_BAND, value: isLoading };
};

export const SET_SELECTED_BAND_ERROR = "SET_SELECTED_BAND_ERROR";
export const setSelectedBandError = error => {
  return { type: SET_SELECTED_BAND_ERROR, error };
};
