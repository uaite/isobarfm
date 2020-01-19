import React, { useContext } from 'react';
import { BandContainer } from './style';

import { useHistory } from 'react-router-dom';

import { BAND } from '../../constants/routes';
import { ThemeContext } from 'styled-components';

const Band = ({ id, name, biography, image }) => {
  const history = useHistory();
  const theme = useContext(ThemeContext);

  const onBandClicked = () => {
    history.push(`${BAND}/${id}`);
  };

  return (
    <BandContainer theme={theme}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{biography}</p>
      <button onClick={onBandClicked}>go to band</button>
    </BandContainer>
  );
};

export default Band;
