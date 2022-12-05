import { RootState } from "../store";

export default {
  getLoggedIn: (state: RootState) => state.authReducer.isLoggedIn,
};
