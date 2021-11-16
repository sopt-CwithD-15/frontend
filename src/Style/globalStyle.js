import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { deviceMediaQuery } from './mediaQuery';

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root, body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    @media ${deviceMediaQuery.mobile} {
    font-size: 13px;
    }
    @media ${deviceMediaQuery.tablet} {
      font-size: 14px;
    }
    @media ${deviceMediaQuery.desktop} {
      font-size: 18px;
    }

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
