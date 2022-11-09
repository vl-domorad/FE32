import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./Reducers/themeReducer";

export const store = configureStore({
  reducer: { themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
