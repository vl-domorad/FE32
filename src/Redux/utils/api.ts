import { create } from "apisauce";
import { RegisterUserData, SignInUserData } from "../Types/auth";

const API = create({ baseURL: "https://studapi.teachmeskills.by" });

const registerUser = (data: RegisterUserData) => {
  return API.post("/auth/users/", data);
};

const getAllPosts = () => {
  return API.get("/blog/posts/?limit=11");
};

const signInUser = (data: SignInUserData) => {
  return API.post("/auth/jwt/create/", data);
};

const getUserInfo = (token: string) => {
  return API.get(
    "/auth/users/me/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default {
  registerUser,
  getAllPosts,
  signInUser,
  getUserInfo,
};
