import axios from "axios";
// Router
import { ApiServiceLocalhost, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH LAB ACTION
 ********************/
export const LAB_BEGIN = "LAB_BEGIN";
export const LAB_SUCCESS = "LAB_SUCCESS";
export const LAB_FAILURE = "LAB_FAILURE";

export const labBegin = () => ({
  type: LAB_BEGIN,
});

export const labSuccess = (payload) => ({
  type: LAB_SUCCESS,
  payload: { payload },
});

export const labFailure = (payload) => ({
  type: LAB_FAILURE,
  payload: { payload },
});

export function labFetch(hn, date) {
  return (dispatch) => {
    dispatch(labBegin());
    return axios
      .get(`${ApiServiceLocalhost}/api/lab?hn=${hn}&daterequest=${date}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(labSuccess(data));
        return data;
      })
      .catch((error) => dispatch(labFailure(error)));
  };
}
