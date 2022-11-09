import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../Constants/@types";

type PostsReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalOpened: boolean;
};

const initialState: PostsReducerState = {
  selectedPost: null,
  isSelectedPostModalOpened: false,
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
  },
});

export const { setSelectedPost, setSelectedPostModalVisible } =
  postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
