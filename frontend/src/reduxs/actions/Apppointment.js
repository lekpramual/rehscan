import axios from "axios";
// Router
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH APPPOINTMENT ACTION
 ********************/
export const APPPOINTMENT_BEGIN = "APPPOINTMENT_BEGIN";
export const APPPOINTMENT_SUCCESS = "APPPOINTMENT_SUCCESS";
export const APPPOINTMENT_FAILURE = "APPPOINTMENT_FAILURE";

export const ApppointmentBegin = () => ({
  type: APPPOINTMENT_BEGIN,
});

export const ApppointmentSuccess = (payload) => ({
  type: APPPOINTMENT_SUCCESS,
  payload: { payload },
});

export const ApppointmentFailure = (payload) => ({
  type: APPPOINTMENT_FAILURE,
  payload: { payload },
});

export const getApppointmentFetch = (cid) => {
  return (dispatch) => {
    dispatch(ApppointmentBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugApppointment/patient/${cid}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(ApppointmentSuccess(data));
        return data;
      })
      .catch((error) => dispatch(ApppointmentFailure(error)));
  };
};

/*********************
 * FETCH APPPOINTMENT VN ACTION
 ********************/
export const APPPOINTMENT_VN_BEGIN = "APPPOINTMENT_VN_BEGIN";
export const APPPOINTMENT_VN_SUCCESS = "APPPOINTMENT_VN_SUCCESS";
export const APPPOINTMENT_VN_FAILURE = "APPPOINTMENT_VN_FAILURE";

export const ApppointmentVnBegin = () => ({
  type: APPPOINTMENT_VN_BEGIN,
});

export const ApppointmentVnSuccess = (payload) => ({
  type: APPPOINTMENT_VN_SUCCESS,
  payload: { payload },
});

export const ApppointmentVnFailure = (payload) => ({
  type: APPPOINTMENT_VN_FAILURE,
  payload: { payload },
});

export const getApppointmentVnFetch = (vn) => {
  return (dispatch) => {
    dispatch(ApppointmentVnBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugApppointment/getbyvn/${vn}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(ApppointmentVnSuccess(data));
        return data;
      })
      .catch((error) => dispatch(ApppointmentVnFailure(error)));
  };
};
