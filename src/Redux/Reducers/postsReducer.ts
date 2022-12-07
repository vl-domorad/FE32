import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardsListType,
  CardType,
  LikeStatus,
  SetLikeStatusPayload,
} from "../../Constants/@types";

type PostsReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalOpened: boolean;
  likedPosts: CardsListType;
  dislikedPosts: CardsListType;
  savedPosts: CardsListType;
  isPostsLoading: boolean;
  postsList: CardsListType;
};

const initialState: PostsReducerState = {
  selectedPost: null,
  isSelectedPostModalOpened: false,
  likedPosts: [],
  dislikedPosts: [],
  savedPosts: [],
  isPostsLoading: false,
  postsList: []
};

//если кладете дальше объект - исходное значение null
//если кладете массив  - []
//если кладете число - 0
//boolean - false
//string - ''

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
      // верхний if else подробно описан ниже
      // if (likeStatus === LikeStatus.Like) {
      //   // if LikeStatus === 'LIKE'
      //   if (likedIndex === -1) { // Здесь определяем, ставим или снимаем лайк с поста
      //     state.likedPosts.push(card);
      //   } else {
      //     state.likedPosts.splice(likedIndex, 1);
      //   }
      //   if (dislikedIndex > -1) { // Здесь определяем, ставили ли мы на этот пост дизлайк
      //     state.dislikedPosts.splice(dislikedIndex, 1);
      //   }
      // } else {
      //   // if LikeStatus === 'DISLIKE'
      //   if (dislikedIndex === -1) { // Здесь определяем, ставим или снимаем дизлайк с поста
      //     state.dislikedPosts.push(card);
      //   } else {
      //     state.dislikedPosts.splice(dislikedIndex, 1);
      //   }
      //
      //   if (likedIndex > -1) {  // Здесь определяем, ставили ли мы на этот пост лайк
      //     state.likedPosts.splice(likedIndex, 1);
      //   }
      // }
    },
    //ToDo: дописать типы вместо any
    getPosts: (state, action: PayloadAction<any>) => {},
    setPosts: (state, action: PayloadAction<CardsListType>) => {
      state.postsList = action.payload
    },
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostsLoading = action.payload;
    },
  },
});

export const {
  setSelectedPost,
  setSelectedPostModalVisible,
  setLikeStatus,
  getPosts,
  setPosts,
  setPostsLoading,
} = postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
