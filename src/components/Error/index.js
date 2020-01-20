import React from 'react';

import { ErrorContainer } from './style';

import errorImg from '../../assets/no_results.png';

const Error = ({ message }) => (
  <ErrorContainer>
    <img src={errorImg} alt="Error"></img>
    <p>{message}</p>
  </ErrorContainer>
);

export default Error;
