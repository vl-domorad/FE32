import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterUserPayload, SignInUserPayload } from "../Types/auth";
import { ACCESS_TOKEN_KEY } from "../../Constants/consts";

const INITIAL_STATE = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    signInUser: (state, action: PayloadAction<SignInUserPayload>) => {},
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getUserData: (state, action: PayloadAction<undefined>) => {},
    setUserData: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});
export const {
  registerUser,
  signInUser,
  setLoggedIn,
  getUserData,
  setUserData,
} = authSlice.actions;

export default authSlice.reducer;
