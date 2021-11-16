import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root, body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    font-size: 62.5%;

    font-family: Roboto;
  }

  * {
    box-sizing: border-box;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
