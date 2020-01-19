import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Card from '../Card';
import noImg from '../../assets/no_image.png';

const Album = ({ id, name, image }) => {
  const theme = useContext(ThemeContext);

  return (
    <Card
      theme={theme}
      image={image}
      aria={`Cover of the album ${name}`}
      fallback={noImg}
    >
      <h1>{name}</h1>
    </Card>
  );
};

export default Album;
