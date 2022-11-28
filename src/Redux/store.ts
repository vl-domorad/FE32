import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import postsReducer from "./Reducers/postsReducer";
import themeReducer from "./Reducers/themeReducer";
import authReducer from "./Reducers/authReducer";
import rootSaga from "./Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  themeReducer,
  postsReducer,
  authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
