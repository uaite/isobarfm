import React from 'react';
import Card from '../Card';

import { useHistory } from 'react-router-dom';

import { BAND } from '../../constants/routes';

import noImg from '../../assets/no_image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Band = ({ id, name, numPlays, image }) => {
  const history = useHistory();

  const onBandClicked = e => {
    if (e.type !== 'keypress' || (e.type === 'keypress' && e.key === 'Enter')) {
      history.push(`${BAND}/${id}`);
    }
  };

  return (
    <Card
      image={image}
      fallback={noImg}
      onClick={onBandClicked}
      onKeyPress={onBandClicked}
    >
      <h1>{name}</h1>
      <h2>
        <FontAwesomeIcon icon={faMusic} className="icon" />
        {Number(numPlays).toLocaleString()}
      </h2>
    </Card>
  );
};

export default Band;
