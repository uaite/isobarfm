import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import px2vw from '../utils/px2vw';
import { light } from './themes';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  :root {
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    color: ${light.black};
    background-color: ${light.bg}

    font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  button, .clickable {
    border: 0;
    border-radius: 2px;
    transition: 0.1s

    :focus {
      outline: none;
    }

    :hover {
      filter: brightness(0.9);
    }

    :active {
      filter: brightness(0.8);
    }
  }

  a {
    color: ${light.accent};
    text-decoration: none;
    transition: .3s;

    :visited {
      color: ${light.secondary};
    }

    :hover {
      color: darken(${light.primary}, 0.3);
    }
  }
`;
