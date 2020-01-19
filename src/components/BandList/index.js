import React, { Fragment, useEffect } from 'react';

import Band from '../Band';
import Loader from '../Loader';
import { BandListWrapper, BandListContainer } from './style';

import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';

import * as bandsSelectors from '../../selectors/bands';
import * as bandsActions from '../../actions/bands';

const BandList = () => {
  const bands = useSelector(bandsSelectors.getBands);
  const filteredBands = useSelector(bandsSelectors.getFilteredBands);
  const error = useSelector(bandsSelectors.getError);
  const isLoading = useSelector(bandsSelectors.isBandListLoading);

  const fetchBands = useActions(bandsActions.fetchBands);

  useEffect(() => {
    fetchBands();
  }, [fetchBands]);

  const listBands = () => {
    if (filteredBands.length > 0) {
      return filteredBands.map(value => <Band key={value.id} {...value} />);
    }
    return bands.map(value => <Band key={value.id} {...value} />);
  };

  const renderList = () => (
    <BandListContainer>{error ? error.message : listBands()}</BandListContainer>
  );

  return (
    <Fragment>
      {isLoading && <Loader />}
      {!isLoading && renderList()}
    </Fragment>
  );
};

export default BandList;
