import { create } from "apisauce";
import { RegisterUserData } from "../Types/auth";

const API = create({ baseURL: "https://studapi.teachmeskills.by" });

const registerUser = (data: RegisterUserData) => {
  return API.post("/auth/users/", data);
};

export default {
  registerUser,
};
