import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterUserPayload } from "../Types/auth";

const INITIAL_STATE = {};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
  },
});
export const { registerUser } = authSlice.actions;

export default authSlice.reducer;
