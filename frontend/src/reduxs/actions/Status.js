import axios from "axios";
// Router
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH USER ACTION
 ********************/
export const STATUS_BEGIN = "STATUS_BEGIN";
export const STATUS_SUCCESS = "STATUS_SUCCESS";
export const STATUS_FAILURE = "STATUS_FAILURE";

export const drugStatusBegin = () => ({
  type: STATUS_BEGIN,
});

export const drugStatusSuccess = (payload) => ({
  type: STATUS_SUCCESS,
  payload: { payload },
});

export const drugStatusFailure = (payload) => ({
  type: STATUS_FAILURE,
  payload: { payload },
});

export function drugStatusFetch() {
  return (dispatch) => {
    dispatch(drugStatusBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugDeliveryStatus`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(drugStatusSuccess(data));
        return data;
      })
      .catch((error) => dispatch(drugStatusFailure(error)));
  };
}
