import axios from "axios";
// Router
import { ApiServiceIntranet, SecretKey } from "../../managers/ApiCon";

/*********************
 * FETCH USER ACTION
 ********************/

export const DELIVERY_BEGIN = "DELIVERY_BEGIN";
export const DELIVERY_SUCCESS = "DELIVERY_SUCCESS";
export const DELIVERY_FAILURE = "DELIVERY_FAILURE";

export const DeliveryBegin = () => ({
  type: DELIVERY_BEGIN,
});

export const DeliverySuccess = (payload) => ({
  type: DELIVERY_SUCCESS,
  payload: { payload },
});

export const DeliveryFailure = (payload) => ({
  type: DELIVERY_FAILURE,
  payload: { payload },
});

export const getDeliveryFetch = (data) => {
  return (dispatch) => {
    dispatch(DeliveryBegin());
    return axios
      .post(`${ApiServiceIntranet}/drugDelivery`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(DeliverySuccess(data));
        return data;
      })
      .catch((error) => dispatch(DeliveryFailure(error)));
  };
};

/*********************
 * FETCH DELIVERY ACTION
 ********************/
export const DELIVERY2_BEGIN = "DELIVERY2_BEGIN";
export const DELIVERY2_SUCCESS = "DELIVERY2_SUCCESS";
export const DELIVERY2_FAILURE = "DELIVERY2_FAILURE";

export const Delivery2Begin = () => ({
  type: DELIVERY2_BEGIN,
});

export const Delivery2Success = (payload) => ({
  type: DELIVERY2_SUCCESS,
  payload: { payload },
});

export const Delivery2Failure = (payload) => ({
  type: DELIVERY2_FAILURE,
  payload: { payload },
});

export const getDelivery2Fetch = (hn, date) => {
  return (dispatch) => {
    dispatch(Delivery2Begin());
    return axios
      .get(`${ApiServiceIntranet}/drugDelivery/${hn}/${date}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(Delivery2Success(data));
        return data;
      })
      .catch((error) => dispatch(Delivery2Failure(error)));
  };
};

/*********************
 * PUT DELIVERY ACTION
 ********************/
export const DELIVERYPUT_BEGIN = "DELIVERYPUT_BEGIN";
export const DELIVERYPUT_SUCCESS = "DELIVERYPUT_SUCCESS";
export const DELIVERYPUT_FAILURE = "DELIVERYPUT_FAILURE";

export const DeliveryPutBegin = () => ({
  type: DELIVERYPUT_BEGIN,
});

export const DeliveryPutSuccess = (payload) => ({
  type: DELIVERYPUT_SUCCESS,
  payload: { payload },
});

export const DeliveryPutFailure = (payload) => ({
  type: DELIVERYPUT_FAILURE,
  payload: { payload },
});

export const putDeliveryFetch = (id, data) => {
  return (dispatch) => {
    dispatch(DeliveryPutBegin());
    return axios
      .put(`${ApiServiceIntranet}/drugDelivery/${id}`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(DeliveryPutSuccess(data));
        return data;
      })
      .catch((error) => dispatch(DeliveryPutFailure(error)));
  };
};

/*********************
 * GET DATE DELIVERY ACTION
 ********************/
export const DELIVERYDAY_BEGIN = "DELIVERYDAY_BEGIN";
export const DELIVERYDAY_SUCCESS = "DELIVERYDAY_SUCCESS";
export const DELIVERYDAY_FAILURE = "DELIVERYDAY_FAILURE";

export const deliveryDayBegin = () => ({
  type: DELIVERYDAY_BEGIN,
});

export const deliveryDaySuccess = (payload) => ({
  type: DELIVERYDAY_SUCCESS,
  payload: { payload },
});

export const deliveryDayFailure = (payload) => ({
  type: DELIVERYDAY_FAILURE,
  payload: { payload },
});

export const DeliveryDay = (point, date) => {
  return (dispatch) => {
    dispatch(deliveryDayBegin());
    return axios
      .get(`${ApiServiceIntranet}/getDeliveryToReportAll/${point}/${date}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(deliveryDaySuccess(data));
        return data;
      })
      .catch((error) => dispatch(DeliveryFailure(error)));
  };
};

/*********************
 * GET ID Delivery ACTION
 ********************/
export const DELIVERYID_BEGIN = "DELIVERYID_BEGIN";
export const DELIVERYID_SUCCESS = "DELIVERYID_SUCCESS";
export const DELIVERYID_FAILURE = "DELIVERYID_FAILURE";

export const deliveryIdBegin = () => ({
  type: DELIVERYID_BEGIN,
});

export const deliveryIdSuccess = (payload) => ({
  type: DELIVERYID_SUCCESS,
  payload: { payload },
});

export const deliveryIdFailure = (payload) => ({
  type: DELIVERYID_FAILURE,
  payload: { payload },
});

export const DeliveryId = (id) => {
  return (dispatch) => {
    dispatch(deliveryIdBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugDelivery/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(deliveryIdSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliveryIdFailure(error)));
  };
};

/*********************
 * GET PTTYPE Delivery ACTION
 ********************/
export const DELIVERYPTTYPE_BEGIN = "DELIVERYPTTYPE_BEGIN";
export const DELIVERYPTTYPE_SUCCESS = "DELIVERYPTTYPE_SUCCESS";
export const DELIVERYPTTYPE_FAILURE = "DELIVERYPTTYPE_FAILURE";

export const deliveryPttypeBegin = () => ({
  type: DELIVERYPTTYPE_BEGIN,
});

export const deliveryPttypeSuccess = (payload) => ({
  type: DELIVERYPTTYPE_SUCCESS,
  payload: { payload },
});

export const deliveryPttypeFailure = (payload) => ({
  type: DELIVERYPTTYPE_FAILURE,
  payload: { payload },
});

export const DeliveryPttype = (pointid, deliverydate) => {
  return (dispatch) => {
    dispatch(deliveryPttypeBegin());
    return axios
      .get(
        `${ApiServiceIntranet}/getDeliveryToReportPttype22_23/${pointid}/${deliverydate}`,
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
        dispatch(deliveryPttypeSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliveryPttypeFailure(error)));
  };
};

/*********************
 * GET ONLINE Delivery ACTION
 ********************/
export const DELIVERYONLINE_BEGIN = "DELIVERYONLINE_BEGIN";
export const DELIVERYONLINE_SUCCESS = "DELIVERYONLINE_SUCCESS";
export const DELIVERYONLINE_FAILURE = "DELIVERYONLINE_FAILURE";

export const deliveryOnlineBegin = () => ({
  type: DELIVERYONLINE_BEGIN,
});

export const deliveryOnlineSuccess = (payload) => ({
  type: DELIVERYONLINE_SUCCESS,
  payload: { payload },
});

export const deliveryOnlineFailure = (payload) => ({
  type: DELIVERYONLINE_FAILURE,
  payload: { payload },
});

export const DeliveryOnline = () => {
  return (dispatch) => {
    dispatch(deliveryOnlineBegin());
    return axios
      .get(`${ApiServiceIntranet}/getDrugDelivery/online`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(deliveryOnlineSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliveryOnlineFailure(error)));
  };
};

/*********************
 * GET  Delivery VN ACTION
 ********************/
export const DELIVERY_VN_BEGIN = "DELIVERY_VN_BEGIN";
export const DELIVERY_VN_SUCCESS = "DELIVERY_VN_SUCCESS";
export const DELIVERY_VN_FAILURE = "DELIVERY_VN_FAILURE";

export const deliveryVnBegin = () => ({
  type: DELIVERY_VN_BEGIN,
});

export const deliveryVnSuccess = (payload) => ({
  type: DELIVERY_VN_SUCCESS,
  payload: { payload },
});

export const deliveryVnFailure = (payload) => ({
  type: DELIVERY_VN_FAILURE,
  payload: { payload },
});

export const DeliveryVn = (vn) => {
  return (dispatch) => {
    dispatch(deliveryVnBegin());
    return axios
      .get(`${ApiServiceIntranet}/delivery/${vn}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(deliveryVnSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliveryVnFailure(error)));
  };
};

/*********************
 * GET  Delivery Remaindate ACTION
 ********************/
export const DELIVERY_REMAINDATE_BEGIN = "DELIVERY_REMAINDATE_BEGIN";
export const DELIVERY_REMAINDATE_SUCCESS = "DELIVERY_REMAINDATE_SUCCESS";
export const DELIVERY_REMAINDATE_FAILURE = "DELIVERY_REMAINDATE_FAILURE";

export const deliveryRemaindateBegin = () => ({
  type: DELIVERY_REMAINDATE_BEGIN,
});

export const deliveryRemaindateSuccess = (payload) => ({
  type: DELIVERY_REMAINDATE_SUCCESS,
  payload: { payload },
});

export const deliveryRemaindateFailure = (payload) => ({
  type: DELIVERY_REMAINDATE_FAILURE,
  payload: { payload },
});

export const DeliveryRemaindate = (pointvalue, datevalue) => {
  return (dispatch) => {
    dispatch(deliveryRemaindateBegin());
    return axios
      .get(
        `${ApiServiceIntranet}/getDeliveryToReport/${pointvalue}/${datevalue}`,
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
        dispatch(deliveryRemaindateSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliveryRemaindateFailure(error)));
  };
};

/*********************
 * GET DELIVERYDATERANGE DELIVERY ACTION
 ********************/

export const DELIVERYDATERANGE_BEGIN = "DELIVERYDATERANGE_BEGIN";
export const DELIVERYDATERANGE_SUCCESS = "DELIVERYDATERANGE_SUCCESS";
export const DELIVERYDATERANGE_FAILURE = "DELIVERYDATERANGE_FAILURE";

export const deliveryDayRangeBegin = () => ({
  type: DELIVERYDATERANGE_BEGIN,
});

export const deliveryDayRangeSuccess = (payload) => ({
  type: DELIVERYDATERANGE_SUCCESS,
  payload: { payload },
});

export const deliveryDayRangeFailure = (payload) => ({
  type: DELIVERYDATERANGE_FAILURE,
  payload: { payload },
});

export const DeliveryDayRange = (point_code, date_start, date_end) => {
  return (dispatch) => {
    dispatch(deliveryDayRangeBegin());
    return axios
      .get(
        `${ApiServiceIntranet}/getDeliveryToReportByVstdateRange/${point_code}/${date_start}/${date_end}`,
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
        dispatch(deliveryDayRangeSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliveryDayRangeFailure(error)));
  };
};

/*********************
 * GET CID DELIVERY_SEARCHTRACK ACTION
 ********************/
export const DELIVERY_SEARCHTRACK_BEGIN = "DELIVERY_SEARCHTRACK_BEGIN";
export const DELIVERY_SEARCHTRACK_SUCCESS = "DELIVERY_SEARCHTRACK_SUCCESS";
export const DELIVERY_SEARCHTRACK_FAILURE = "DELIVERY_SEARCHTRACK_FAILURE";

export const deliverySearchTrackBegin = () => ({
  type: DELIVERY_SEARCHTRACK_BEGIN,
});

export const deliverySearchTrackSuccess = (payload) => ({
  type: DELIVERY_SEARCHTRACK_SUCCESS,
  payload: { payload },
});

export const deliverySearchTrackFailure = (payload) => ({
  type: DELIVERY_SEARCHTRACK_FAILURE,
  payload: { payload },
});

export const DeliverySearchTrack = (cid) => {
  return (dispatch) => {
    dispatch(deliverySearchTrackBegin());
    return axios
      .get(`${ApiServiceIntranet}/drugDeliverySeachTrack/${cid}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          SecretKey: SecretKey,
        },
      })
      .then((res) => {
        var data = [];
        data.push(res.data);
        dispatch(deliverySearchTrackSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliverySearchTrackFailure(error)));
  };
};

/*********************
 * GET DELIVERY_DEPARTMENT_PTTYPE ACTION
 ********************/
export const DELIVERY_DEPARTMENT_PTTYPE_BEGIN =
  "DELIVERY_DEPARTMENT_PTTYPE_BEGIN";
export const DELIVERY_DEPARTMENT_PTTYPE_SUCCESS =
  "DELIVERY_DEPARTMENT_PTTYPE_SUCCESS";
export const DELIVERY_DEPARTMENT_PTTYPE_FAILURE =
  "DELIVERY_DEPARTMENT_PTTYPE_FAILURE";

export const deliveryDepartmentPttypeBegin = () => ({
  type: DELIVERY_DEPARTMENT_PTTYPE_BEGIN,
});

export const deliveryDepartmentPttypeSuccess = (payload) => ({
  type: DELIVERY_DEPARTMENT_PTTYPE_SUCCESS,
  payload: { payload },
});

export const deliveryDepartmentPttypeFailure = (payload) => ({
  type: DELIVERY_DEPARTMENT_PTTYPE_FAILURE,
  payload: { payload },
});

export const DeliveryDepartmentPttype = (
  daystart,
  dayend,
  department,
  pttype
) => {
  return (dispatch) => {
    dispatch(deliveryDepartmentPttypeBegin());
    return axios
      .get(
        `${ApiServiceIntranet}/getReportDeliveryByVstdateDepartmentPttype/${daystart}/${dayend}/${department}/${pttype}`,
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
        dispatch(deliveryDepartmentPttypeSuccess(data));
        return data;
      })
      .catch((error) => dispatch(deliveryDepartmentPttypeFailure(error)));
  };
};
