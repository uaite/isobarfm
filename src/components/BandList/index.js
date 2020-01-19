import React, { Fragment, useEffect } from 'react';

import Band from '../Band';
import Loader from '../Loader';
import { BandListContainer } from './style';

import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';

import * as bandsSelectors from '../../selectors/bands';
import * as bandsActions from '../../actions/bands';

import noResults from '../../assets/no_results.png';

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
      return <img src={noResults} alt="No results for search"></img>;
    }
    return (
      <BandListContainer>
        {error ? error.message : listBands()}
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
