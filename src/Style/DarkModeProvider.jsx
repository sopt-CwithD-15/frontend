import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkModeContext } from 'Cores/Contexts';
import theme from './mediaQuery';

function DarkModeProvider({ children }) {
  const [currentMode, setCurrentMode] = useState('light'); // can be 'light', 'dark'
  return (
    <DarkModeContext.Provider value={{ currentMode, setCurrentMode }}>
      <ThemeProvider
        theme={{
          ...theme,
          currentMode,
        }}>
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
