import React, { useState } from "react";
import { IChildrenProps, IThemeContext } from "../types/types";

export const ThemeContext = React.createContext({} as IThemeContext);

// create context provider
export const ToggleProvider = ({ children }: IChildrenProps) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
