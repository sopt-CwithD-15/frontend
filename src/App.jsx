import { ThemeProvider } from 'styled-components';
import Router from 'Cores/router';
import GlobalStyle from 'Style/globalStyle';
import theme from 'Style/mediaQuery';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
