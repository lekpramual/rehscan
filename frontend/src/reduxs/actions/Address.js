import axios from "axios";
// Router
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH USER ACTION
 ********************/
export const DRUGADDRESS_BEGIN = "DRUGADDRESS_BEGIN";
export const DRUGADDRESS_SUCCESS = "DRUGADDRESS_SUCCESS";
export const DRUGADDRESS_FAILURE = "DRUGADDRESS_FAILURE";

export const drugAddressBegin = () => ({
  type: DRUGADDRESS_BEGIN
});

export const drugAddressSuccess = payload => ({
  type: DRUGADDRESS_SUCCESS,
  payload: { payload }
});

export const drugAddressFailure = payload => ({
  type: DRUGADDRESS_FAILURE,
  payload: { payload }
});

export function drugAddressFetch(hn) {
  return dispatch => {
    dispatch(drugAddressBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugAddress/${hn}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then(res => {
        var data = [];
        data.push(res.data);
        setTimeout(() => {
          dispatch(drugAddressSuccess(data));
        }, 1500);
        return data;
      })
      .catch(error => dispatch(drugAddressFailure(error)));
  };
}

/*********************
 * CREATE USER ACTION
 ********************/
export const CREATEADDRESS_BEGIN = "CREATEADDRESS_BEGIN";
export const CREATEADDRESS_SUCCESS = "CREATEADDRESS_SUCCESS";
export const CREATEADDRESS_FAILURE = "CREATEADDRESS_FAILURE";

export const createAddressBegin = () => ({
  type: CREATEADDRESS_BEGIN
});

export const createAddressSuccess = payload => ({
  type: CREATEADDRESS_SUCCESS,
  payload: { payload }
});

export const createAddressFailure = payload => ({
  type: CREATEADDRESS_FAILURE,
  payload: { payload }
});

export function createAddress(data) {
  return dispatch => {
    dispatch(createAddressBegin());
    return axios
      .post(`${ApiServiceIntranet}/drugAddress`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then(res => {
        var data = [];
        data.push(res.data);
        dispatch(createAddressSuccess(data));
        return data;
      })
      .catch(error => dispatch(createAddressFailure(error)));
  };
}

/*********************
 * UPDATE USER ACTION
 ********************/
export const UPDATEADDRESS_BEGIN = "UPDATEADDRESS_BEGIN";
export const UPDATEADDRESS_SUCCESS = "UPDATEADDRESS_SUCCESS";
export const UPDATEADDRESS_FAILURE = "UPDATEADDRESS_FAILURE";

export const updateAddressBegin = () => ({
  type: UPDATEADDRESS_BEGIN
});

export const updateAddressSuccess = payload => ({
  type: UPDATEADDRESS_SUCCESS,
  payload: { payload }
});

export const updateAddressFailure = payload => ({
  type: UPDATEADDRESS_FAILURE,
  payload: { payload }
});

export function updateAddress(hn, data) {
  return dispatch => {
    dispatch(updateAddressBegin());
    return axios
      .put(`${ApiServiceIntranet}/drugAddress/${hn}`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey
        }
      })
      .then(res => {
        var data = [];
        data.push(res.data);
        dispatch(updateAddressSuccess(data));
        return data;
      })
      .catch(error => dispatch(updateAddressFailure(error)));
  };
}
