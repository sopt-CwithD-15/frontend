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
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    &:hover::-webkit-scrollbar-thumb {
      background-color: #bfbfbf;
      border-radius: 18px;
    }
  }

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
