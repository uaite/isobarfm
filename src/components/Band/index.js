import React, { useContext } from 'react';
import { BandContainer } from './style';

import { useHistory } from 'react-router-dom';

import { BAND } from '../../constants/routes';
import { ThemeContext } from 'styled-components';

import noImg from '../../assets/no_image.png';

const Band = ({ id, name, numPlays, image }) => {
  const history = useHistory();
  const theme = useContext(ThemeContext);

  const onBandClicked = () => {
    history.push(`${BAND}/${id}`);
  };

  return (
    <BandContainer
      theme={theme}
      image={image}
      fallback={noImg}
      onClick={onBandClicked}
    >
      <p>{name}</p>
      <p>{numPlays}</p>
    </BandContainer>
  );
};

export default Band;
