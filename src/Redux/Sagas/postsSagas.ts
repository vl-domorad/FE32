import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getPosts, setPosts } from "../Reducers/postsReducer";
import API from "../utils/api";

//ToDo: дописать типы вместо any
function* getPostsWorker(action: PayloadAction<any>) {
  const { ok, data, problem } = yield call(API.getAllPosts);
  if (ok && data) {
    yield put(setPosts(data.results));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
}

export default function* postsSaga() {
  yield all([takeLatest(getPosts, getPostsWorker)]);
}
