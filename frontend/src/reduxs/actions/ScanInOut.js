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

export function showScan(search, d_start, d_end) {
  return (dispatch) => {
    dispatch(showBegin());
    const condiction =
      d_start !== null && d_end !== null
        ? `&d_start=${d_start}&d_end=${d_end}`
        : "";
    return axios
      .get(`${ApiServiceHeroku}/api/scan/show?search=${search}${condiction}`, {
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

// body params
// userId : รหัสผู้ใช้งาน
// checkType : เข้า 0 - ออก 1
// scanId : รหัสจุดสแกน

export function createScanInOut(data) {
  return (dispatch) => {
    dispatch(createBegin());
    return axios
      .post(`${ApiServiceHeroku}/api/scan/create`, data, {
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
        console.log(data);
        return data;
      })
      .catch((error) => dispatch(createFailure(error)));
  };
}
