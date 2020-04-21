import { REGISTER, LOGIN, LOGOUT } from "./actions";

export const userRegister = (data) => {
  return {
    type: REGISTER,
    user: data,
  };
};

export const userLogin = (data) => {
  return {
    type: LOGIN,
    user: data,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
    user: null,
  };
};
