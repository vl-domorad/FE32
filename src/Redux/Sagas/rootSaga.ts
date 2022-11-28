import { all } from "redux-saga/effects";

import authSaga from "./authSagas";
import postsSaga from "./postsSagas";

export default function* rootSaga() {
  yield all([authSaga(), postsSaga()]);
}
