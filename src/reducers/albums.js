import {
  SET_ALBUMS,
  SET_LOADING_ALBUMS,
  SET_ALBUMS_ERROR,
} from '../actions/albums';

const initialState = {
  list: [],
  byBand: {},
  isLoading: false,
  error: null,
};

const setAlbumsByBand = (albumList, bandID, albumIDs, byBand) => {
  const albumsByBand = albumList.reduce((indexedAlbums, cur) => {
    for (const albumID of albumIDs) {
      if (albumID === cur.id) {
        indexedAlbums.push(cur);
      }
    }

    return indexedAlbums;
  }, []);

  const nbb = JSON.parse(JSON.stringify(byBand));
  nbb[bandID] = albumsByBand;

  return nbb;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      const byBand = setAlbumsByBand(
        action.value.albums,
        action.value.bandID,
        action.value.albumIDs,
        state.byBand
      );

      return {
        ...state,
        list: action.value.albums,
        byBand,
        error: null,
      };
    case SET_LOADING_ALBUMS:
      return {
        ...state,
        isLoading: action.value,
      };
    case SET_ALBUMS_ERROR:
      return {
        ...state,
        list: [],
        byBand: {},
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
