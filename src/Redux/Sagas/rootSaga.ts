import { all } from "redux-saga/effects";

import authSaga from "./authSagas";

export default function* rootSaga() {
  yield all([authSaga()]);
}
