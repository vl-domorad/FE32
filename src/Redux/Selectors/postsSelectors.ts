import { RootState } from "../store";

export default {
  getSelectedPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostModalVisible: (state: RootState) => state.postsReducer.isSelectedPostModalOpened,
};
