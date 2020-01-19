import React, { useContext } from 'react';
import { SearchContainer } from './style';

import { ThemeContext } from 'styled-components';

import { useSelector } from 'react-redux';
import * as bandsSelectors from '../../selectors/bands';

import useActions from '../../hooks/useActions';
import * as bandsActions from '../../actions/bands';

import Icon, { ClickableIcon } from '../Icon';
import searchIcon from '../../assets/search.png';
import orderBy from '../../assets/order_by.png';

const Search = () => {
  const theme = useContext(ThemeContext);
  const filter = useSelector(bandsSelectors.getFilter);
  const sort = useSelector(bandsSelectors.getSort);
  const ascending = useSelector(bandsSelectors.getAscending);

  const setFilter = useActions(bandsActions.setBandListFilter);

  return (
    <SearchContainer theme={theme}>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onInput={e => {
          //   if (e.target.value === filter) return;
          setFilter({ filter: e.target.value, sort, ascending });
        }}
      ></input>
      <Icon src={searchIcon}></Icon>
      <ClickableIcon src={orderBy}></ClickableIcon>
    </SearchContainer>
  );
};

export default Search;
