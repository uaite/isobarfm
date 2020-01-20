import React, { Fragment, useEffect } from 'react';

import Band from '../Band';
import Loader from '../Loader';
import Error from '../Error';
import { BandListWrapper, BandListContainer } from './style';

import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';

import * as bandsSelectors from '../../selectors/bands';
import * as bandsActions from '../../actions/bands';
import { SORTING_MODES } from '../../reducers/bands';

const BandList = () => {
  const filter = useSelector(bandsSelectors.getFilter);
  const filteredBands = useSelector(bandsSelectors.getFilteredBands);
  const error = useSelector(bandsSelectors.getError);
  const isLoading = useSelector(bandsSelectors.isBandListLoading);

  const sort = useSelector(bandsSelectors.getSort);
  const ascending = useSelector(bandsSelectors.getAscending);

  const fetchBands = useActions(bandsActions.fetchBands);

  useEffect(() => {
    fetchBands();
  }, [fetchBands]);

  const listBands = () => {
    return filteredBands.map(value => <Band key={value.id} {...value} />);
  };

  const getSortText = () => {
    let text;
    switch (sort) {
      case SORTING_MODES.ALPHABETICAL:
        text = 'sorted alphabetically';
        break;
      case SORTING_MODES.POPULARITY:
        text = 'sorted by popularity';
        break;
      default:
        return '';
    }

    return `${text} in ${ascending ? 'ascending' : 'descending'} order`;
  };

  const renderList = () => {
    if (filter && filteredBands.length === 0) {
      return <Error message={'No results to show.'}></Error>;
    }
    return (
      <BandListWrapper>
        <p>
          Showing {filteredBands.length} results {getSortText()}
        </p>
        <BandListContainer>
          {error ? <Error message={error.message} /> : listBands()}
        </BandListContainer>
      </BandListWrapper>
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
