import React, { FC, ReactElement } from "react";

import ThemeContext from "./ThemeContext";
import { Theme } from "../../Constants/@types";

type ThemeProviderProps = {
  theme: Theme;
  onChangeTheme: (value: Theme) => void;
  children: ReactElement;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  onChangeTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
