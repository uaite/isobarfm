import React from 'react';

import Card from '../Card';
import noImg from '../../assets/no_image.png';

const Album = ({ id, name, image }) => {
  return (
    <Card image={image} aria={`Cover of the album ${name}`} fallback={noImg}>
      <h1>{name}</h1>
    </Card>
  );
};

export default Album;
