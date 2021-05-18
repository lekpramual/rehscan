import axios from "axios";
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

export const PHARMACY_BEGIN = "PHARMACY_BEGIN";
export const PHARMACY_SUCCESS = "PHARMACY_SUCCESS";
export const PHARMACY_FAILURE = "PHARMACY_FAILURE";

export const pharmacyBegin = () => ({
  type: PHARMACY_BEGIN,
});

export const pharmacySuccess = (payload) => ({
  type: PHARMACY_SUCCESS,
  payload: { payload },
});

export const pharmacyFailure = (payload) => ({
  type: PHARMACY_FAILURE,
  payload: { payload },
});

export function pharmacyFetch() {
  return (dispatch) => {
    dispatch(pharmacyBegin());
    return axios
      .get(`${ApiServiceIntranet}/pharmacys`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(pharmacySuccess(data));
        return data;
      })
      .catch((error) => dispatch(pharmacyFailure(error)));
  };
}
