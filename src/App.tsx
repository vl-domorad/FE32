import React, { useState } from "react";

import ThemeProvider from "./Context/Theme";
import { Theme } from "./Constants/@types";
import Router from "./Pages/Router";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
