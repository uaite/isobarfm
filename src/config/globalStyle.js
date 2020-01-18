import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  html, body {
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #000;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  button {
    border: 0;
  }

  a {
    color: #111;
    text-decoration: none;
    transition: .3s;

    :visited {
      color: #111;
    }

    :hover {
      color: #fff;
    }
  }
`;
