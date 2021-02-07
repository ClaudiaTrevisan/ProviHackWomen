import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fbf9f8;
    color: #333333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, select, button {
    font-family: 'Encode Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  h1, h2, h3, h4 {
    font-weight: 600;
  }

  h1 {
    font-size: 60.75px;
  }

  h2 {
    font-size: 40.5px;
  }

  h3 {
    font-size: 27px;
  }

  h4 {
    font-size: 18px;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
