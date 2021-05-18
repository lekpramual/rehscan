import axios from "axios";
import decode from "jwt-decode";
// Router
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

export const logoutUser = () => ({
  type: "LOGOUT_USER"
});

export const loginProfile = payload => ({
  type: "LOGIN_PROFILE",
  payload: payload
});

export const loginLoggedIn = () => ({
  type: "LOGIN_LOGGEDIN"
});

const loginUser = payload => ({
  type: "LOGIN_USER",
  payload: payload
});

export const loginFailure = payload => ({
  type: "LOGIN_FAILURE",
  payload: { payload }
});

export const loginError = error => ({
  type: "LOGIN_ERROR",
  payload: { error }
});

export const userLoginFetch = data => {
  return dispatch => {
    return axios
      .post(`${ApiServiceIntranet}/gettokenb`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then(res => {
        var data = [];
        data = res.data;
        if (data.message) {
          localStorage.setItem("token", data.token);
          dispatch(loginUser(decode(getToken())));
          return data.message;
        } else {
          dispatch(loginFailure(data.message));
          return data.message;
        }
      })
      .catch(error => dispatch(loginError(error)));
  };
};

export const userLogoutFetch = () => {
  return dispatch => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };
};

export const getProfileFetch = () => {
  return dispatch => {
    dispatch(loginProfile(decode(getToken())));
  };
};

export const getLoggedInFetch = () => {
  return dispatch => {
    dispatch(loginLoggedIn());
    const token = getToken();
    return !!token;
  };
};

/******************************
 ************ Functions ********
 ******************************/

export const getToken = () => {
  return localStorage.getItem("token");
};
