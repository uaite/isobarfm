import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  BandHeader,
  AlbumListContainer,
  AlbumList,
  BandContent,
} from './style';
import Loader from '../Loader';
import Album from '../Album';
import Error from '../Error';

import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';

import * as bandSelectors from '../../selectors/selectedBand';
import * as bandActions from '../../actions/selectedBand';

import * as albumSelectors from '../../selectors/albums';

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
    const albumList = albumsByBand[selectedBand.id];
    if (albumList && albumList.length > 0) {
      return albumList.map(value => <Album key={value.id} {...value}></Album>);
    }
    return <Error message="No albums to display." />;
  };

  const renderBandInfo = () => (
    <Fragment>
      <BandHeader image={selectedBand.image}>
        <h2>{selectedBand.genre}</h2>
        <h1>{selectedBand.name}</h1>
        <h2>{`${Number(selectedBand.numPlays).toLocaleString()} streams`}</h2>
      </BandHeader>
      <BandContent>
        <p
          dangerouslySetInnerHTML={{
            __html: `${selectedBand.biography}`,
          }}
        ></p>
      </BandContent>
    </Fragment>
  );

  const renderAlbumInfo = () => (
    <AlbumListContainer>
      <h1>Albums</h1>
      <AlbumList>
        {albumError ? <Error message={albumError.message} /> : listAlbums()}
      </AlbumList>
    </AlbumListContainer>
  );

  return (
    <Fragment>
      {isBandLoading && <Loader />}
      {!isBandLoading && renderBandInfo()}
      {areAlbumsLoading && <Loader />}
      {!areAlbumsLoading && renderAlbumInfo()}
    </Fragment>
  );
};

export default BandPage;
