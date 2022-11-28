export type RegisterUserData = {
  username: string;
  email: string;
  password: string;
};

export type RegisterUserPayload = {
  data: RegisterUserData;
  callback: () => void;
};
