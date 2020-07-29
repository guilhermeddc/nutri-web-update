import {createGlobalStyle} from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background: ${theme.colors.white};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, select, option, textarea {
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.SM};
    font-family: ${theme.font.family.primary};
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
