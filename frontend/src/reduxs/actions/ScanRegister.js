import axios from "axios";
import { ApiServiceHeroku, SecretKey } from "../../managers/ApiCon";

export const CREATE_BEGIN = "CREATE_BEGIN";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_FAILURE = "CREATE_FAILURE";

export const createBegin = () => ({
  type: CREATE_BEGIN
});

export const createSuccess = (payload) => ({
  type: CREATE_SUCCESS,
  payload: { payload }
});

export const createFailure = (payload) => ({
  type: CREATE_FAILURE,
  payload: { payload }
});

export function createRegister(data) {
  return (dispatch) => {
    dispatch(createBegin());
    return axios
      .post(`${ApiServiceHeroku}/api/register/create`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(createSuccess(data));
        return data;
      })
      .catch((error) => dispatch(createFailure(error)));
  };
}
