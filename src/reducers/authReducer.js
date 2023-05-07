import { LOGIN_USER, SIGNUP_USER } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case SIGNUP_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;