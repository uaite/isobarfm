import React, { Fragment, useEffect } from 'react';

import Band from '../Band';
import Loader from '../Loader';
import Error from '../Error';
import { BandListContainer } from './style';

import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';

import * as bandsSelectors from '../../selectors/bands';
import * as bandsActions from '../../actions/bands';

const BandList = () => {
  const filter = useSelector(bandsSelectors.getFilter);
  const filteredBands = useSelector(bandsSelectors.getFilteredBands);
  const error = useSelector(bandsSelectors.getError);
  const isLoading = useSelector(bandsSelectors.isBandListLoading);

  const fetchBands = useActions(bandsActions.fetchBands);

  useEffect(() => {
    fetchBands();
  }, [fetchBands]);

  const listBands = () => {
    return filteredBands.map(value => <Band key={value.id} {...value} />);
  };

  const renderList = () => {
    if (filter && filteredBands.length === 0) {
      return <Error message={'No results to show.'}></Error>;
    }
    return (
      <BandListContainer>
        {error ? <Error message={error.message} /> : listBands()}
      </BandListContainer>
    );
  };

  return (
    <Fragment>
      {isLoading && <Loader />}
      {!isLoading && renderList()}
    </Fragment>
  );
};

export default BandList;
