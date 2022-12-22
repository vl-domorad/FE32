import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getPosts,
  setPosts,
  getSinglePost,
  setSinglePost,
  setTotalCount,
  addNewPost,
  editPost,
  deletePost,
} from "../Reducers/postsReducer";

import API from "../utils/api";
import callCheckingAuth from "./callCheckingAuth";
import {IAddNewPostPayload, IDeletePostPayload, IEditPostPayload} from "../../Constants/@types";

function* getPostsWorker(action: PayloadAction<number>) {
  const { ok, data, problem } = yield call(API.getAllPosts, action.payload);
  if (ok && data) {
    yield put(setPosts(data.results));
    yield put(setTotalCount(data.count));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
}

function* addNewPostWorker(action: PayloadAction<IAddNewPostPayload>) {
  const { callback, formData } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.addNewPost, formData);
  if (ok) {
    callback();
  } else {
    console.warn("Error adding new post", problem);
  }
}
function* editPostWorker(action: PayloadAction<IEditPostPayload>) {
  const { callback, formData, id } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.editPost, formData, id);
  if (ok) {
    callback();
  } else {
    console.warn("Error editing post", problem);
  }
}

function* deletePostWorker(action: PayloadAction<IDeletePostPayload>) {
  const { callback, id } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.deletePost, id);
  if (ok) {
    callback();
  } else {
    console.warn("Error deleting post", problem);
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem } = yield call(API.getSinglePost, action.payload);
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error fetching single post: ", problem);
  }
}

export default function* postsSaga() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(addNewPost, addNewPostWorker),
    takeLatest(editPost, editPostWorker),
    takeLatest(deletePost, deletePostWorker),
  ]);
}
