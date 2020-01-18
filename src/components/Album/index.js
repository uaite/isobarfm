import React from "react";
import { AlbumContainer } from "./style";

const Album = ({ id, name, image }) => {
  return (
    <AlbumContainer>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{id}</p>
    </AlbumContainer>
  );
};

export default Album;
