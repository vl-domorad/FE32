import { RootState } from "../store";

export default {
  getSelectedPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostModalVisible: (state: RootState) =>
    state.postsReducer.isSelectedPostModalOpened,
  getLikedPosts: (state: RootState) => state.postsReducer.likedPosts,
  getDislikedPosts: (state: RootState) => state.postsReducer.dislikedPosts,
  getSavedPosts: (state: RootState) => state.postsReducer.savedPosts,
  getPostsLoading: (state: RootState) => state.postsReducer.isPostsLoading,
  getPostsList: (state: RootState) => state.postsReducer.postsList,
};
