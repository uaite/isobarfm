import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../Loader";
import Album from "../Album";

import { useSelector } from "react-redux";
import useActions from "../../hooks/useActions";

import * as bandSelectors from "../../selectors/selectedBand";
import * as bandActions from "../../actions/selectedBand";

import * as albumSelectors from "../../selectors/albums";

const BandPage = () => {
  const { id } = useParams();
  const selectedBand = useSelector(bandSelectors.getSelectedBand);
  const isBandLoading = useSelector(bandSelectors.isSelectedBandLoading);

  const albumsByBand = useSelector(albumSelectors.getAlbumsByBand);
  const areAlbumsLoading = useSelector(albumSelectors.isAlbumListLoading);
  const albumError = useSelector(albumSelectors.getError);

  const fetchBandByID = useActions(bandActions.fetchBandByID);

  useEffect(() => {
    fetchBandByID(id);
  }, [fetchBandByID, id]);

  const listAlbums = () => {
    if (albumsByBand[selectedBand.id]) {
      return albumsByBand[selectedBand.id].map(value => (
        <Album key={value.id} {...value}></Album>
      ));
    }
    return [];
  };

  return (
    <Fragment>
      {isBandLoading && <Loader />}
      <Fragment>
        <h1>Band</h1>
        {selectedBand.name}
      </Fragment>
      <Fragment>
        {areAlbumsLoading && <Loader />}
        <Fragment>
          <h1>Albums</h1>
          {albumError ? albumError.message : listAlbums()}
        </Fragment>
      </Fragment>
    </Fragment>
  );
};

export default BandPage;
