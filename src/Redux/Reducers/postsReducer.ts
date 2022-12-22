import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardsListType,
  CardType,
  IAddNewPostPayload,
  IEditPostPayload,
  LikeStatus,
  SetLikeStatusPayload,
} from "../../Constants/@types";

type PostsReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalOpened: boolean;
  likedPosts: CardsListType;
  dislikedPosts: CardsListType;
  savedPosts: CardsListType;
  allPosts: CardsListType;
  searchedPosts: CardsListType;
  singlePost: CardType | null;
  totalCount: number;
  searchedTotalCount: number;
};

const initialState: PostsReducerState = {
  selectedPost: null,
  isSelectedPostModalOpened: false,
  likedPosts: [],
  dislikedPosts: [],
  savedPosts: [],
  allPosts: [],
  searchedPosts: [],
  singlePost: null,
  totalCount: 0,
  searchedTotalCount: 0,
};

const postsSlice = createSlice({
  name: "postsReducer",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
      state.isSelectedPostModalOpened = true;
    },

    setSelectedPostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedPostModalOpened = action.payload;
      if (!action.payload) {
        state.selectedPost = null;
      }
    },

    setLikeStatus: (state, action: PayloadAction<SetLikeStatusPayload>) => {
      const { card, likeStatus } = action.payload;

      const isLike = likeStatus === LikeStatus.Like;

      const dislikedIndex = state.dislikedPosts.findIndex(
        (post) => post.id === card.id
      );
      const likedIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );

      const mainArrayKey = isLike ? "likedPosts" : "dislikedPosts";
      const secondaryArrayKey = isLike ? "dislikedPosts" : "likedPosts";
      const mainIndex = isLike ? likedIndex : dislikedIndex;
      const secondaryIndex = isLike ? dislikedIndex : likedIndex;

      if (mainIndex === -1) {
        state[mainArrayKey].push(card);
      } else {
        state[mainArrayKey].splice(mainIndex, 1);
      }
      if (secondaryIndex > -1) {
        state[secondaryArrayKey].splice(secondaryIndex, 1);
      }
    },

    setSavedPosts: (state, action: PayloadAction<CardType>) => {
      const card = action.payload;

      const SavedPostsIndex = state.savedPosts.findIndex(
        (post) => post.id === card.id
      );

      if (SavedPostsIndex === -1) {
        state.savedPosts.push(card);
      } else {
        state.savedPosts.splice(SavedPostsIndex, 1);
      }
    },

    getPosts: (state, action: PayloadAction<number>) => {},
    setPosts: (state, action: PayloadAction<CardsListType>) => {
      state.allPosts = action.payload;
    },

    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardType>) => {
      state.singlePost = action.payload;
    },

    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setSearchedPostsCount: (state, action: PayloadAction<number>) => {
      state.searchedTotalCount = action.payload;
    },
    addNewPost: (state, action: PayloadAction<IAddNewPostPayload>) => {},
    editPost: (state, action: PayloadAction<IEditPostPayload>) => {},
  },
});

export const {
  setSelectedPost,
  setSelectedPostModalVisible,
  setLikeStatus,
  getPosts,
  setPosts,
  getSinglePost,
  setSinglePost,
  setTotalCount,
  addNewPost,
  editPost,
  setSavedPosts,
  setSearchedPostsCount,
} = postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
