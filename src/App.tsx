import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import ThemeProvider from "./Context/Theme";
import { Theme } from "./Constants/@types";
import Router from "./Pages/Router";
import { store } from "./Redux/store";
import { setTheme } from "./Redux/Reducers/themeReducer";
import ThemeSelectors from "./Redux/Selectors/themeSelectors";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelectors.getTheme);
  // const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const onChangeTheme = (value: Theme) => {
    dispatch(setTheme(value));
    // dispatch - это руки, которые несут что-то в редакс,
    // setTheme - куда эти руки что-то несут,
    // value === payload -> что руки куда-то несут
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
