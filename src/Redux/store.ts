import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./Reducers/postsReducer";
import themeReducer from "./Reducers/themeReducer";

export const store = configureStore({
  reducer: { themeReducer, postsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
