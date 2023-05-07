import { LOGIN_USER, SIGNUP_USER } from "../constants/actionTypes";

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const signupUser = (user) => ({
  type: SIGNUP_USER,
  payload: user,
});