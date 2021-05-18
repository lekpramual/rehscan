import axios from "axios";
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

export const SHIPPING_BEGIN = "SHIPPING_BEGIN";
export const SHIPPING_SUCCESS = "SHIPPING_SUCCESS";
export const SHIPPING_FAILURE = "SHIPPING_FAILURE";

export const shippingBegin = () => ({
  type: SHIPPING_BEGIN,
});

export const shippingSuccess = (payload) => ({
  type: SHIPPING_SUCCESS,
  payload: { payload },
});

export const shippingFailure = (payload) => ({
  type: SHIPPING_FAILURE,
  payload: { payload },
});

export function shippingFetch() {
  return (dispatch) => {
    dispatch(shippingBegin());
    return axios
      .get(`${ApiServiceIntranet}/shippings`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(shippingSuccess(data));
        return data;
      })
      .catch((error) => dispatch(shippingFailure(error)));
  };
}
