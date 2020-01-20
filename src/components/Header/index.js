import React from 'react';

import { Container } from './style';

import Search from '../Search';

import Logo from '../Logo';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('');
  };

  return (
    <Container>
      <Logo alt="logo" src={logo} onClick={goHome} tabindex="0" />
      <Search></Search>
    </Container>
  );
};

export default Header;
