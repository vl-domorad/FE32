import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getPosts, setPosts, setPostsLoading } from "../Reducers/postsReducer";
import API from "../utils/api";

//ToDo: дописать типы вместо any
function* getPostsWorker(action: PayloadAction<any>) {
  yield put(setPostsLoading(true))
  const { ok, data, problem } = yield call(API.getAllPosts);
  if (ok && data) {
    yield put(setPosts(data.results));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
  yield put(setPostsLoading(false))
}

export default function* postsSaga() {
  yield all([takeLatest(getPosts, getPostsWorker)]);
}
