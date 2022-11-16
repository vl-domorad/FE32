import { RootState } from "../store";

export default {
  getSelectedPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostModalVisible: (state: RootState) =>
    state.postsReducer.isSelectedPostModalOpened,
  getLikedPosts: (state: RootState) => state.postsReducer.likedPosts,
  getDislikedPosts: (state: RootState) => state.postsReducer.dislikedPosts,
  getSavePosts: (state: RootState) => state.postsReducer.savedPosts,
};
