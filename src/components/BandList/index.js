import React, { Fragment, useEffect, useCallback } from 'react';

import Band from '../Band';
import Loader from '../Loader';
import Error from '../Error';
import { BandListWrapper, BandListContainer } from './style';

import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';
import useScrollEvent from '../../hooks/useScrollEvent';

import * as bandsSelectors from '../../selectors/bands';
import * as bandsActions from '../../actions/bands';
import { SORTING_MODES } from '../../reducers/bands';

import getScrollPercent from '../../utils/getScrollPercent';

const BandList = () => {
  const filter = useSelector(bandsSelectors.getFilter);
  const filteredBands = useSelector(bandsSelectors.getFilteredBands);
  const error = useSelector(bandsSelectors.getError);
  const isLoading = useSelector(bandsSelectors.isBandListLoading);

  const sort = useSelector(bandsSelectors.getSort);
  const ascending = useSelector(bandsSelectors.getAscending);
  const pages = useSelector(bandsSelectors.getPages);

  const fetchBands = useActions(bandsActions.fetchBands);
  const setPages = useActions(bandsActions.setPages);

  useEffect(() => {
    fetchBands();
  }, [fetchBands]);

  const listBands = () => {
    return filteredBands
      .slice(0, 10 * pages)
      .map(value => <Band key={value.id} {...value} />);
  };

  const scrollCallback = useCallback(
    evt => {
      if (getScrollPercent() > 85 && pages * 10 < filteredBands.length) {
        setPages(pages + 1);
      }
    },
    [pages, setPages, filteredBands]
  );

  useScrollEvent(scrollCallback);

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
          Showing{' '}
          {pages > filteredBands.length ? filteredBands.length : pages * 10} of{' '}
          {filteredBands.length} results {getSortText()}
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
