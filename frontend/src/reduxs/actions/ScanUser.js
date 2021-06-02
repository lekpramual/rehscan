import axios from "axios";
import { ApiServiceHeroku, SecretKey } from "../../managers/ApiCon";

export const SHOW_BEGIN = "SHOW_BEGIN";
export const SHOW_SUCCESS = "SHOW_SUCCESS";
export const SHOW_FAILURE = "SHOW_FAILURE";

export const showBegin = () => ({
  type: SHOW_BEGIN
});

export const showSuccess = (payload) => ({
  type: SHOW_SUCCESS,
  payload: { payload }
});

export const showFailure = (payload) => ({
  type: SHOW_FAILURE,
  payload: { payload }
});

export function showUser(search) {
  return (dispatch) => {
    dispatch(showBegin());
    return axios
      .get(`${ApiServiceHeroku}/api/user/show?search=${search}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(showSuccess(data));
        return data;
      })
      .catch((error) => dispatch(showFailure(error)));
  };
}
