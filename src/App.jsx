import Router from 'Cores/router';
import GlobalStyle from 'Style/globalStyle';
import DarkModeProvider from 'Style/DarkModeProvider';

function App() {
  return (
    <>
      <GlobalStyle />
      <DarkModeProvider>
        <Router />
      </DarkModeProvider>
    </>
  );
}

export default App;
