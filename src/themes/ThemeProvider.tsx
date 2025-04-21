import React, { createContext, useContext, useState, ReactNode } from 'react';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  theme: typeof lightTheme;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  setMode: () => {},
  theme: lightTheme,
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  initialMode?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialMode = 'light' 
}) => {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  
  const theme = mode === 'light' ? lightTheme : darkTheme;
  
  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      <div className={`theme-${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};