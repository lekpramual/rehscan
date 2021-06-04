import axios from "axios";
import { ApiServiceHeroku, SecretKey } from "../../managers/ApiCon";

export const INDEX_BEGIN = "INDEX_BEGIN";
export const INDEX_SUCCESS = "INDEX_SUCCESS";
export const INDEX_FAILURE = "INDEX_FAILURE";

export const indexBegin = () => ({
  type: INDEX_BEGIN
});

export const indexSuccess = (payload) => ({
  type: INDEX_SUCCESS,
  payload: { payload }
});

export const indexFailure = (payload) => ({
  type: INDEX_FAILURE,
  payload: { payload }
});

export function indexLocation() {
  return (dispatch) => {
    dispatch(indexBegin());
    return axios
      .get(`${ApiServiceHeroku}/api/location/index`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(indexSuccess(data));
        return data;
      })
      .catch((error) => dispatch(indexFailure(error)));
  };
}

// CREATE
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

export function createLocation(data) {
  return (dispatch) => {
    dispatch(createBegin());
    return axios
      .post(`${ApiServiceHeroku}/api/location/create`, data, {
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
