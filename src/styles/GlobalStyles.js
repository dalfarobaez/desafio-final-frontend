import { createGlobalStyle } from 'styled-components';
import device from './breakpoints';

const GlobalStyles = createGlobalStyle`
  #root {
    max-width: 1920px;
    margin: 0 auto;
    text-align: center;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;  
  }

  body {
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button, textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }
`;

export default GlobalStyles;
