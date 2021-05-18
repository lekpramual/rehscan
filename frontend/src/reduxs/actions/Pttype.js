import axios from "axios";
// Router
import { ApiServiceLocalhost, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH PTTYPE ACTION
 ********************/
export const PTTYPE_BEGIN = "PTTYPE_BEGIN";
export const PTTYPE_SUCCESS = "PTTYPE_SUCCESS";
export const PTTYPE_FAILURE = "PTTYPE_FAILURE";

export const pttypeBegin = () => ({
  type: PTTYPE_BEGIN,
});

export const pttypeSuccess = (payload) => ({
  type: PTTYPE_SUCCESS,
  payload: { payload },
});

export const pttypeFailure = (error) => ({
  type: PTTYPE_FAILURE,
  payload: { error },
});

export function pttypeFetch() {
  return (dispatch) => {
    dispatch(pttypeBegin());
    return axios
      .get(`${ApiServiceLocalhost}/api/pttypes`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(pttypeSuccess(data));
        return data;
      })
      .catch((error) => dispatch(pttypeFailure(error)));
  };
}
