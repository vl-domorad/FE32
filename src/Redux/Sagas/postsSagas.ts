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
import {
  IAddNewPostPayload,
  IDeletePostPayload,
  IEditPostPayload,
} from "../../Constants/@types";
import { toast } from "react-toastify";

function* getPostsWorker(action: PayloadAction<number>) {
  const { ok, data, problem } = yield call(API.getAllPosts, action.payload);
  if (ok && data) {
    yield put(setPosts(data.results));
    yield put(setTotalCount(data.count));
  } else {
    console.warn("Error fetching posts: ", problem);
    toast.error("Error fetching posts");
  }
}

function* addNewPostWorker(action: PayloadAction<IAddNewPostPayload>) {
  const { callback, formData } = action.payload;
  const { ok } = yield callCheckingAuth(API.addNewPost, formData);
  if (ok) {
    callback();
    toast.success("Post added successfully");
  } else {
    toast.error("Error adding new post");
  }
}
function* editPostWorker(action: PayloadAction<IEditPostPayload>) {
  const { callback, formData, id } = action.payload;
  const { ok } = yield callCheckingAuth(API.editPost, formData, id);
  if (ok) {
    callback();
    toast.success("Post edited successfully");
  } else {
    toast.error("Error editing post");
  }
}

function* deletePostWorker(action: PayloadAction<IDeletePostPayload>) {
  const { callback, id } = action.payload;
  const { ok } = yield callCheckingAuth(API.deletePost, id);
  if (ok) {
    callback();
    toast.success("Post deleted successfully");
  } else {
    toast.error("Error deleting post");
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem } = yield call(API.getSinglePost, action.payload);
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    toast.error("Error fetching post");
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
