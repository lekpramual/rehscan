import axios from "axios";
// Router
import { ApiServiceLocalhost, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH DEPART ACTION
 ********************/
export const DEPART_BEGIN = "DEPART_BEGIN";
export const DEPART_SUCCESS = "DEPART_SUCCESS";
export const DEPART_FAILURE = "DEPART_FAILURE";

export const departBegin = () => ({
  type: DEPART_BEGIN,
});

export const departSuccess = (payload) => ({
  type: DEPART_SUCCESS,
  payload: { payload },
});

export const departFailure = (error) => ({
  type: DEPART_FAILURE,
  payload: { error },
});

export function departFetch() {
  return (dispatch) => {
    dispatch(departBegin());
    return axios
      .get(`${ApiServiceLocalhost}/api/departments`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(departSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(departFailure(error));
      });
  };
}
