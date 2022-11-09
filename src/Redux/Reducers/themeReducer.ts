import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Theme } from "../../Constants/@types";

const initialState = {
  theme: Theme.Light,
};

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      //action.type -> куда в редаксе вы стучитесь - куда вы пришли
      //action.payload -> что вы туда хотите положить - что вы принесли
    },
  },
});

export const { setTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;
export default themeReducer;

// const themeReducer =  (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case ‘setTheme’:
//         return {
//             ...state,
//             theme: action.payload;
//         }
//}