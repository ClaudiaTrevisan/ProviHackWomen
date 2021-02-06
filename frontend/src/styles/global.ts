import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #e5e5e5;
    color: #489fb5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-family: 'Encode Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  h1, h2, h3 {
    font-weight: 700;

    &.semibold {
      font-weight: 600;
    }

    &.regular {
      font-weight: 400;
    }
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

  button {
    cursor: pointer;
  }
`;
