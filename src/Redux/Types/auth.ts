export type GeneralDataWithCallback<T> = {
  data: T;
  callback: () => void;
};

export type RegisterUserData = {
  username: string;
  email: string;
  password: string;
};

export type SignInUserData = {
  email: string;
  password: string;
};

export type RegisterUserPayload = GeneralDataWithCallback<RegisterUserData>;
export type SignInUserPayload = GeneralDataWithCallback<SignInUserData>;
