import React, { useEffect } from 'react';
import { SearchContainer, SearchInput } from './style';

import { useSelector } from 'react-redux';
import * as bandsSelectors from '../../selectors/bands';

import useActions from '../../hooks/useActions';
import * as bandsActions from '../../actions/bands';

import searchIcon from '../../assets/search.png';

import SortingButton from '../SortingButton';

const Search = () => {
  const filter = useSelector(bandsSelectors.getFilter);
  const sort = useSelector(bandsSelectors.getSort);
  const ascending = useSelector(bandsSelectors.getAscending);

  const setFilter = useActions(bandsActions.setBandListFilter);

  useEffect(() => {
    setFilter({ filter, sort, ascending });
  }, [filter, ascending, sort, setFilter]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        icon={searchIcon}
        onInput={e => {
          setFilter({ filter: e.target.value, sort, ascending });
        }}
      ></SearchInput>
      <SortingButton />
    </SearchContainer>
  );
};

export default Search;
