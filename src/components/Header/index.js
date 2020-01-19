import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Container } from './style';

import Search from '../Search';

import Logo from '../Logo';
import logo from '../../assets/logo.png';

const Header = ({ routes }) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();

  return (
    <Container theme={theme}>
      <Logo alt="logo" src={logo} />
      {/* {routes.map(({ displayName, to }) => (
        <Link {...{ to, key: to }}>{displayName}</Link>
      ))} */}
      <button onClick={() => history.goBack()}>Back</button>
      <Search></Search>
    </Container>
  );
};

Header.defaultProps = { routes: [] };

export default Header;
