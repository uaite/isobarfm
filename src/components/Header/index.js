import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './style';

import Search from '../Search';

import Logo from '../Logo';
import logo from '../../assets/logo.png';

const Header = ({ routes }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Logo alt="logo" src={logo} />
      <Search></Search>
    </Container>
  );
};

Header.defaultProps = { routes: [] };

export default Header;
