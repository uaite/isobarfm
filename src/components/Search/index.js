import React, { useContext, useEffect, useState } from 'react';
import { SearchContainer, SearchInput, PopoverButton } from './style';

import { ThemeContext } from 'styled-components';

import Popover from 'react-popover';

import { useSelector } from 'react-redux';
import * as bandsSelectors from '../../selectors/bands';

import useActions from '../../hooks/useActions';
import * as bandsActions from '../../actions/bands';

import searchIcon from '../../assets/search.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faMusic, faFont } from '@fortawesome/free-solid-svg-icons';

import { SORTING_MODES } from '../../reducers/bands';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useContext(ThemeContext);
  const filter = useSelector(bandsSelectors.getFilter);
  const sort = useSelector(bandsSelectors.getSort);
  const ascending = useSelector(bandsSelectors.getAscending);

  const setFilter = useActions(bandsActions.setBandListFilter);

  useEffect(() => {
    setFilter({ filter, sort, ascending });
  }, [filter, ascending, sort, setFilter]);

  const togglePopover = (newState = null) => {
    setIsOpen(newState === null ? !isOpen : newState);
  };

  const setSorting = newSort => {
    console.log('setting sort with', filter, newSort, ascending);
    if (sort === newSort) {
      setFilter({ filter, sort: newSort, ascending: !ascending });
    } else {
      setFilter({ filter, sort: newSort, ascending: true });
    }
  };

  const popoverBody = [
    <PopoverButton
      key="alphabetical"
      onClick={() => setSorting(SORTING_MODES.ALPHABETICAL)}
    >
      <FontAwesomeIcon icon={faFont} /> Alphabetical
    </PopoverButton>,
    <PopoverButton
      key="popularity"
      onClick={() => setSorting(SORTING_MODES.POPULARITY)}
    >
      <FontAwesomeIcon icon={faMusic} /> Popularity
    </PopoverButton>,
  ];

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
      <Popover
        isOpen={isOpen}
        body={popoverBody}
        onOuterAction={() => togglePopover(false)}
        preferPlace="below"
      >
        <button onClick={() => togglePopover(true)}>
          <FontAwesomeIcon icon={faSort} /> Sort
        </button>
      </Popover>
    </SearchContainer>
  );
};

export default Search;
