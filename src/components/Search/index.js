import React, { useContext, useEffect } from 'react';
import { SearchContainer, SearchInput } from './style';

import { ThemeContext } from 'styled-components';

import { useSelector } from 'react-redux';
import * as bandsSelectors from '../../selectors/bands';

import useActions from '../../hooks/useActions';
import * as bandsActions from '../../actions/bands';

import { ClickableIcon } from '../Icon';
import searchIcon from '../../assets/search.png';
import orderBy from '../../assets/order_by.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const theme = useContext(ThemeContext);
  const filter = useSelector(bandsSelectors.getFilter);
  const sort = useSelector(bandsSelectors.getSort);
  const ascending = useSelector(bandsSelectors.getAscending);

  const setFilter = useActions(bandsActions.setBandListFilter);

  useEffect(() => {
    setFilter({ filter, sort, ascending });
  });

  return (
    <SearchContainer theme={theme}>
      <SearchInput
        type="text"
        placeholder="Search..."
        icon={searchIcon}
        onInput={e => {
          setFilter({ filter: e.target.value, sort, ascending });
        }}
      ></SearchInput>
      {/* <ClickableIcon src={orderBy}></ClickableIcon> */}
      <button>
        <FontAwesomeIcon icon={faSort} />
      </button>
    </SearchContainer>
  );
};

export default Search;
