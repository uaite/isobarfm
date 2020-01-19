import React, { useEffect, useState } from 'react';
import { PopoverButton } from './style';

import Popover from 'react-popover';

import { useSelector } from 'react-redux';
import * as bandsSelectors from '../../selectors/bands';

import useActions from '../../hooks/useActions';
import * as bandsActions from '../../actions/bands';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faMusic, faFont } from '@fortawesome/free-solid-svg-icons';

import { SORTING_MODES } from '../../reducers/bands';

const SortingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  );
};

export default SortingButton;
