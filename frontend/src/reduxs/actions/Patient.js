import axios from "axios";
// Router
import { ApiServiceLocalhost, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH USER ACTION
 ********************/

export const PATIENT_BEGIN = "PATIENT_BEGIN";
export const PATIENT_SUCCESS = "PATIENT_SUCCESS";
export const PATIENT_FAILURE = "PATIENT_FAILURE";

export const PatientBegin = () => ({
  type: PATIENT_BEGIN,
});

export const PatientSuccess = (payload) => ({
  type: PATIENT_SUCCESS,
  payload: { payload },
});

export const PatientFailure = (error) => ({
  type: PATIENT_FAILURE,
  payload: { error },
});

export const patientFetch = (hn) => {
  return (dispatch) => {
    dispatch(PatientBegin());
    return axios
      .get(`${ApiServiceLocalhost}/api/patient?hn=${hn}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(PatientSuccess(data));
        return data;
      })
      .catch((err) => {
        dispatch(PatientFailure(err));
      });
  };
};
