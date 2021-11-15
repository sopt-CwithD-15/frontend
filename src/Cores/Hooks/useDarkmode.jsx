import { useContext, useCallback } from 'react';
import { DarkModeContext } from 'Cores/Contexts';

function useDarkmode() {
  const darkmodeContext = useContext(DarkModeContext);
  const { currentMode, setCurrentMode } = darkmodeContext;

  const toggleMode = useCallback(() => {
    if (currentMode === 'light') setCurrentMode('dark');
    else setCurrentMode('light');
  });

  return { currentMode, toggleMode };
}

export default useDarkmode;
