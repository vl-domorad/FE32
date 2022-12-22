import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterUserPayload,
  SetUserDataPayload,
  SignInUserPayload,
} from "../Types/auth";
import { ACCESS_TOKEN_KEY } from "../../Constants/consts";

type AuthState = {
  isLoggedIn: boolean
  userName: string
  userId: number | null
}

const INITIAL_STATE: AuthState = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  userName: "",
  userId: null
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
    setUserData: (state, action: PayloadAction<SetUserDataPayload>) => {
      const { userName, id } = action.payload;
      state.userName = userName;
      state.userId = id;
    },
    logoutUser: (state, action: PayloadAction<undefined>) => {},
  },
});
export const {
  registerUser,
  signInUser,
  setLoggedIn,
  getUserData,
  setUserData,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
