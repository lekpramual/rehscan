import axios from "axios";
// Router
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH USER ACTION
 ********************/
export const DRUGPOINT_BEGIN = "DRUGPOINT_BEGIN";
export const DRUGPOINT_SUCCESS = "DRUGPOINT_SUCCESS";
export const DRUGPOINT_FAILURE = "DRUGPOINT_FAILURE";

export const drugPointBegin = () => ({
  type: DRUGPOINT_BEGIN,
});

export const drugPointSuccess = (payload) => ({
  type: DRUGPOINT_SUCCESS,
  payload: { payload },
});

export const drugPointFailure = (payload) => ({
  type: DRUGPOINT_FAILURE,
  payload: { payload },
});

export function drugPointFetch() {
  return (dispatch) => {
    dispatch(drugPointBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugPoint`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(drugPointSuccess(data));
        return data;
      })
      .catch((error) => dispatch(drugPointFailure(error)));
  };
}

/*********************
 * FETCH DRUGPOINT_BY POINT ID ACTION
 ********************/
export const DRUGPOINTID_BEGIN = "DRUGPOINTID_BEGIN";
export const DRUGPOINTID_SUCCESS = "DRUGPOINTID_SUCCESS";
export const DRUGPOINTID_FAILURE = "DRUGPOINTID_FAILURE";

export const drugPointIDBegin = () => ({
  type: DRUGPOINTID_BEGIN,
});

export const drugPointIDSuccess = (payload) => ({
  type: DRUGPOINTID_SUCCESS,
  payload: { payload },
});

export const drugPointIDFailure = (payload) => ({
  type: DRUGPOINTID_FAILURE,
  payload: { payload },
});

export function drugPointIDFetch(pointid) {
  return (dispatch) => {
    dispatch(drugPointIDBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugPoint/${pointid}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(drugPointIDSuccess(data));
        return data;
      })
      .catch((error) => dispatch(drugPointIDFailure(error)));
  };
}
