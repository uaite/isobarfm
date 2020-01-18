import React from "react";
import { BandContainer } from "./style";
import { Link } from "react-router-dom";

import { BAND } from "../../constants/routes";

const Band = ({ id, name, biography, image }) => {
  return (
    <BandContainer>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{biography}</p>
      <Link to={`${BAND}/${id}`}>
        <button>go to band</button>
      </Link>
    </BandContainer>
  );
};

export default Band;
