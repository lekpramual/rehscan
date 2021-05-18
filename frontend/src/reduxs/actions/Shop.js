import axios from "axios";
// Router
import { ApiServiceHeroku, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH ACTION
 ********************/
export const SHOP_BEGIN = "SHOP_BEGIN";
export const SHOP_SUCCESS = "SHOP_SUCCESS";
export const SHOP_FAILURE = "SHOP_FAILURE";

export const shopBegin = () => ({
  type: SHOP_BEGIN,
});

export const shopSuccess = (payload) => ({
  type: SHOP_SUCCESS,
  payload: { payload },
});

export const shopFailure = (payload) => ({
  type: SHOP_FAILURE,
  payload: { payload },
});

export function shopFetch(search) {
  return (dispatch) => {
    dispatch(shopBegin());
    return axios
      .get(`${ApiServiceHeroku}/api/shop?search=${search}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(shopSuccess(data));
        return data;
      })
      .catch((error) => dispatch(shopFailure(error)));
  };
}

/*********************
 * FETCH ACTION
 ********************/
export const COUNTSHOP_BEGIN = "COUNTSHOP_BEGIN";
export const COUNTSHOP_SUCCESS = "COUNTSHOP_SUCCESS";
export const COUNTSHOP_FAILURE = "COUNTSHOP_FAILURE";

export const countshopBegin = () => ({
  type: COUNTSHOP_BEGIN,
});

export const countshopSuccess = (payload) => ({
  type: COUNTSHOP_SUCCESS,
  payload: { payload },
});

export const countshopFailure = (payload) => ({
  type: SHOP_FAILURE,
  payload: { payload },
});

export function countshopFetch() {
  return (dispatch) => {
    dispatch(countshopBegin());
    return axios
      .get(`${ApiServiceHeroku}/api/shops`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(countshopSuccess(data));
        return data;
      })
      .catch((error) => dispatch(countshopFailure(error)));
  };
}

/*********************
 * UPDATE ACTION
 ********************/
export const UPDATESHOP_BEGIN = "UPDATESHOP_BEGIN";
export const UPDATESHOP_SUCCESS = "UPDATESHOP_SUCCESS";
export const UPDATESHOP_FAILURE = "UPDATESHOP_FAILURE";

export const updateShopBegin = () => ({
  type: UPDATESHOP_BEGIN,
});

export const updateShopSuccess = (payload) => ({
  type: UPDATESHOP_SUCCESS,
  payload: { payload },
});

export const updateShopFailure = (payload) => ({
  type: UPDATESHOP_FAILURE,
  payload: { payload },
});

export function updateShop(search) {
  const data = "";
  return (dispatch) => {
    dispatch(updateShopBegin());
    return axios
      .put(`${ApiServiceHeroku}/api/shop?search=${search}`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(updateShopSuccess(data));
        return data;
      })
      .catch((error) => dispatch(updateShopFailure(error)));
  };
}
