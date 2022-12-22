import { create } from "apisauce";
import { RegisterUserData, SignInUserData } from "../Types/auth";
import { PER_PAGE } from "../../Constants/consts";

const API = create({ baseURL: "https://studapi.teachmeskills.by" });

const registerUser = (data: RegisterUserData) => {
  return API.post("/auth/users/", data);
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

const getNewAccessToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
};
const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};

const addNewPost = (token: string, formData: any) => {
  return API.post("/blog/posts/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const getAllPosts = (offset: number, search?: string) => {
  return API.get("/blog/posts/", { limit: PER_PAGE, offset, search });
};

const getSinglePost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const editPost = (token: string, formData: any, id: string) => {
  return API.put(`/blog/posts/${id}/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const deletePost = (token: string, id: string) => {
  return API.delete(
    `/blog/posts/${id}/`,
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
  getNewAccessToken,
  verifyToken,
  addNewPost,
  getSinglePost,
  editPost,
  deletePost,
};
