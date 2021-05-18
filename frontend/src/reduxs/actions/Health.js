import axios from "axios";
// Router
import { ApiServiceLocalhost, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH HEALTH ACTION
 ********************/

export const HEALTHADD_BEGIN = "HEALTHADD_BEGIN";
export const HEALTHADD_SUCCESS = "HEALTHADD_SUCCESS";
export const HEALTHADD_FAILURE = "HEALTHADD_FAILURE";

export const HealthAddBegin = () => ({
  type: HEALTHADD_BEGIN,
});

export const HealthAddSuccess = (payload) => ({
  type: HEALTHADD_SUCCESS,
  payload: { payload },
});

export const HealthAddFailure = (error) => ({
  type: HEALTHADD_FAILURE,
  payload: { error },
});

export const healthAdd = (data) => {
  return (dispatch) => {
    dispatch(HealthAddBegin());
    return axios
      .post(`${ApiServiceLocalhost}/api/health`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(HealthAddSuccess(data));
        return data;
      })
      .catch((err) => {
        dispatch(HealthAddFailure(err));
      });
  };
};

/*********************
 * FETCH HEALTH ACTION
 ********************/

export const HEALTHFETCH_BEGIN = "HEALTHFETCH_BEGIN";
export const HEALTHFETCH_SUCCESS = "HEALTHFETCH_SUCCESS";
export const HEALTHFETCH_FAILURE = "HEALTHFETCH_FAILURE";

export const HealthFetchBegin = () => ({
  type: HEALTHFETCH_BEGIN,
});

export const HealthFetchSuccess = (payload) => ({
  type: HEALTHFETCH_SUCCESS,
  payload: { payload },
});

export const HealthFetchFailure = (error) => ({
  type: HEALTHFETCH_FAILURE,
  payload: { error },
});

export const healthsFetch = (page, hn, department) => {
  return (dispatch) => {
    dispatch(HealthFetchBegin());
    return axios
      .get(
        `${ApiServiceLocalhost}/api/healths?page=${page}&hn=${hn}&department=${department}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            SecretKey: SecretKey,
          },
        }
      )
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(HealthFetchSuccess(data));
        return data;
      })
      .catch((err) => {
        dispatch(HealthFetchFailure(err));
      });
  };
};

/*********************
 * GET HEALTH ACTION
 ********************/

export const HEALTHGET_BEGIN = "HEALTHGET_BEGIN";
export const HEALTHGET_SUCCESS = "HEALTHGET_SUCCESS";
export const HEALTHGET_FAILURE = "HEALTHGET_FAILURE";

export const HealthGetBegin = () => ({
  type: HEALTHGET_BEGIN,
});

export const HealthGetSuccess = (payload) => ({
  type: HEALTHGET_SUCCESS,
  payload: { payload },
});

export const HealthGetFailure = (error) => ({
  type: HEALTHGET_FAILURE,
  payload: { error },
});

export const healthsGet = (hn, daterequest) => {
  return (dispatch) => {
    dispatch(HealthGetBegin());
    return axios
      .get(
        `${ApiServiceLocalhost}/api/health?hn=${hn}&daterequest=${daterequest}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            SecretKey: SecretKey,
          },
        }
      )
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(HealthGetSuccess(data));
        return data;
      })
      .catch((err) => {
        dispatch(HealthGetFailure(err));
      });
  };
};
