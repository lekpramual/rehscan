import axios from "axios";
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

export const SACNUSER_BEGIN = "SACNUSER_BEGIN";
export const SACNUSER_SUCCESS = "SACNUSER_SUCCESS";
export const SACNUSER_FAILURE = "SACNUSER_FAILURE";

export const scanBegin = () => ({
  type: SACNUSER_BEGIN
});

export const scanSuccess = (payload) => ({
  type: SACNUSER_SUCCESS,
  payload: { payload }
});

export const scanFailure = (payload) => ({
  type: SACNUSER_FAILURE,
  payload: { payload }
});

export function index() {
  return (dispatch) => {
    dispatch(scanBegin());
    return axios
      .get(`${ApiServiceIntranet}/scan/index`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(scanSuccess(data));
        return data;
      })
      .catch((error) => dispatch(scanFailure(error)));
  };
}
