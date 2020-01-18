import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { Container } from './style';

const link = 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19670.png';

const Header = ({ routes }) => (
  <Container>
    <Logo alt="logo" src={link} />
    {routes.map(({ displayName, to }) => (
      <Link {...{ to, key: to }}>{displayName}</Link>
    ))}
  </Container>
);

Header.defaultProps = { routes: [] };

export default Header;
