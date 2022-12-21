import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  addNewPost,
  getPosts,
  setPosts,
  setPostsLoading,
} from "../Reducers/postsReducer";
import API from "../utils/api";
import { AddNewPostPayload } from "../../Constants/@types";
import callCheckingAuth from "./callCheckingAuth";

//ToDo: дописать типы вместо any
function* getPostsWorker(action: PayloadAction<any>) {
  yield put(setPostsLoading(true));
  const { ok, data, problem } = yield call(API.getAllPosts);
  if (ok && data) {
    yield put(setPosts(data.results));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
  yield put(setPostsLoading(false));
}

function* addNewPostWorker(action: PayloadAction<AddNewPostPayload>) {
  const { callback, formData } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.addNewPost, formData);
  if (ok) {
    callback();
  } else {
    console.warn("Error adding new post", problem);
  }
}

export default function* postsSaga() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(addNewPost, addNewPostWorker),
  ]);
}
