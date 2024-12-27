import React, { useState } from "react";

// create toggle context
interface IThemeContext {
  theme: string;
  setTheme: any;
}

interface IProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext({} as IThemeContext);

// create context provider
export const ToggleProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
