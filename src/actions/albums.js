import * as albumsAPI from '../services/albums';

export const fetchAlbumsForBand = band => {
  return (dispatch, getState) => {
    const bandID = band.id;
    const albumIDs = band.albums;

    dispatch(setLoadingAlbums(true));

    const state = getState();

    if (state.albums.list.length === 0) {
      albumsAPI
        .list()
        .then(response => {
          const albums = response.data;
          dispatch(setAlbums({ albums, bandID, albumIDs }));
        })
        .catch(err => {
          dispatch(setAlbumsError(err));
        });
    }

    dispatch(setLoadingAlbums(false));
  };
};

export const SET_ALBUMS = 'SET_ALBUMS';
export const setAlbums = ({ albums, bandID, albumIDs }) => {
  return { type: SET_ALBUMS, value: { albums, bandID, albumIDs } };
};

export const SET_LOADING_ALBUMS = 'SET_LOADING_ALBUMS';
export const setLoadingAlbums = isLoading => {
  return { type: SET_LOADING_ALBUMS, value: isLoading };
};

export const SET_ALBUMS_ERROR = 'SET_ALBUMS_ERROR';
export const setAlbumsError = error => {
  return { type: SET_ALBUMS_ERROR, error };
};
