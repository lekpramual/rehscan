// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  DELIVERY_BEGIN,
  DELIVERY_SUCCESS,
  DELIVERY_FAILURE,
  DELIVERY2_BEGIN,
  DELIVERY2_SUCCESS,
  DELIVERY2_FAILURE,
  DELIVERYPUT_BEGIN,
  DELIVERYPUT_SUCCESS,
  DELIVERYPUT_FAILURE,
  DELIVERYDAY_BEGIN,
  DELIVERYDAY_SUCCESS,
  DELIVERYDAY_FAILURE,
  DELIVERYID_BEGIN,
  DELIVERYID_SUCCESS,
  DELIVERYID_FAILURE,
  // pttype
  DELIVERYPTTYPE_BEGIN,
  DELIVERYPTTYPE_SUCCESS,
  DELIVERYPTTYPE_FAILURE,
  // online
  DELIVERYONLINE_BEGIN,
  DELIVERYONLINE_SUCCESS,
  DELIVERYONLINE_FAILURE,
  // vn
  DELIVERY_VN_BEGIN,
  DELIVERY_VN_SUCCESS,
  DELIVERY_VN_FAILURE,
  // Remaindate
  DELIVERY_REMAINDATE_BEGIN,
  DELIVERY_REMAINDATE_SUCCESS,
  DELIVERY_REMAINDATE_FAILURE,
  // DELIVERYDATERANGE
  DELIVERYDATERANGE_BEGIN,
  DELIVERYDATERANGE_SUCCESS,
  DELIVERYDATERANGE_FAILURE,
  //DELIVERY_SEARCHTRACK
  DELIVERY_SEARCHTRACK_BEGIN,
  DELIVERY_SEARCHTRACK_SUCCESS,
  DELIVERY_SEARCHTRACK_FAILURE,
  // DELIVERY_DEPARTMENT_PTTYPE_BEGIN
  DELIVERY_DEPARTMENT_PTTYPE_BEGIN,
  DELIVERY_DEPARTMENT_PTTYPE_SUCCESS,
  DELIVERY_DEPARTMENT_PTTYPE_FAILURE,
} from "../actions/Delivery";

const initialState = {
  currenDelivery: [],
  currenDeliveryFailure: null,
  msg: null,
  currentDeliveryId: [],
  currentDeliveryIdFailure: null,
  // pttype
  currentDeliveryPttype: [],
  currentDeliveryPttypeFailure: null,
  // online
  currentDeliveryOnline: [],
  currentDeliveryOnlineFailure: null,
  // Vn
  currentDeliveryVn: [],
  currentDeliveryVnFailure: null,
  // Remaindate
  currentDeliveryRemaindate: [],
  currentDeliveryRemaindateFailure: null,

  // dateRange
  currentDeliveryDayRange: [],
  currentDeliveryDayRangeFailure: null,

  // DELIVERY_SEARCHTRACK
  currentDeliverySearchTrack: [],
  currentDeliverySearchTrackFailure: null,
  // DELIVERY_DEPARTMENT_PTTYPE_BEGIN
  currentDeliveryDepartmentPttype: [],
  currentDeliveryDepartmentPttypeFailure: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case DELIVERY_BEGIN:
      return {
        ...state,
        currenDelivery: [],
      };
    case DELIVERY_SUCCESS:
      return {
        ...state,
        currenDelivery: action.payload.payload,
      };
    case DELIVERY_FAILURE:
      return {
        ...state,
        currenDeliveryFailure: action.payload.error,
      };
    case DELIVERY2_BEGIN:
      return {
        ...state,
        currenDelivery: [],
      };
    case DELIVERY2_SUCCESS:
      return {
        ...state,
        currenDelivery: action.payload.payload,
      };
    case DELIVERY2_FAILURE:
      return {
        ...state,
        currenDeliveryFailure: action.payload.error,
      };
    case DELIVERYPUT_BEGIN:
      return {
        ...state,
        msg: [],
      };
    case DELIVERYPUT_SUCCESS:
      return {
        ...state,
        msg: action.payload.payload,
      };
    case DELIVERYPUT_FAILURE:
      return {
        ...state,
        msg: action.payload.error,
      };
    case DELIVERYDAY_BEGIN:
      return {
        ...state,
        currenDelivery: [],
      };
    case DELIVERYDAY_SUCCESS:
      return {
        ...state,
        currenDelivery: action.payload.payload,
      };
    case DELIVERYDAY_FAILURE:
      return {
        ...state,
        currenDeliveryFailure: action.payload.error,
      };
    case DELIVERYID_BEGIN:
      return {
        ...state,
        currentDeliveryId: [],
      };
    case DELIVERYID_SUCCESS:
      return {
        ...state,
        currentDeliveryId: action.payload.payload,
      };
    case DELIVERYID_FAILURE:
      return {
        ...state,
        currentDeliveryIdFailure: action.payload.error,
      };
    case DELIVERYPTTYPE_BEGIN:
      return {
        ...state,
        currentDeliveryPttype: [],
      };
    case DELIVERYPTTYPE_SUCCESS:
      return {
        ...state,
        currentDeliveryPttype: action.payload.payload,
      };
    case DELIVERYPTTYPE_FAILURE:
      return {
        ...state,
        currentDeliveryPttypeFailure: action.payload.error,
      };

    case DELIVERYONLINE_BEGIN:
      return {
        ...state,
        currentDeliveryOnline: [],
      };
    case DELIVERYONLINE_SUCCESS:
      return {
        ...state,
        currentDeliveryOnline: action.payload.payload,
      };
    case DELIVERYONLINE_FAILURE:
      return {
        ...state,
        currentDeliveryOnlineFailure: action.payload.error,
      };
    case DELIVERY_VN_BEGIN:
      return {
        ...state,
        currentDeliveryVn: [],
      };
    case DELIVERY_VN_SUCCESS:
      return {
        ...state,
        currentDeliveryVn: action.payload.payload,
      };
    case DELIVERY_VN_FAILURE:
      return {
        ...state,
        currentDeliveryVnFailure: action.payload.error,
      };
    // Remaindate
    case DELIVERY_REMAINDATE_BEGIN:
      return {
        ...state,
        currentDeliveryRemaindate: [],
      };
    case DELIVERY_REMAINDATE_SUCCESS:
      return {
        ...state,
        currentDeliveryRemaindate: action.payload.payload,
      };
    case DELIVERY_REMAINDATE_FAILURE:
      return {
        ...state,
        currentDeliveryRemaindateFailure: action.payload.error,
      };
    // DELIVERYDATERANGE
    case DELIVERYDATERANGE_BEGIN:
      return {
        ...state,
        currentDeliveryDayRange: [],
      };
    case DELIVERYDATERANGE_SUCCESS:
      return {
        ...state,
        currentDeliveryDayRange: action.payload.payload,
      };
    case DELIVERYDATERANGE_FAILURE:
      return {
        ...state,
        currentDeliveryDayRangeFailure: action.payload.error,
      };

    // DELIVERY_SEARCHTRACK
    case DELIVERY_SEARCHTRACK_BEGIN:
      return {
        ...state,
        currentDeliverySearchTrack: [],
      };
    case DELIVERY_SEARCHTRACK_SUCCESS:
      return {
        ...state,
        currentDeliverySearchTrack: action.payload.payload,
      };
    case DELIVERY_SEARCHTRACK_FAILURE:
      return {
        ...state,
        currentDeliverySearchTrackFailure: action.payload.error,
      };

    // DELIVERY_DEPARTMENT_PTTYPE
    case DELIVERY_DEPARTMENT_PTTYPE_BEGIN:
      return {
        ...state,
        currentDeliveryDepartmentPttype: [],
      };
    case DELIVERY_DEPARTMENT_PTTYPE_SUCCESS:
      return {
        ...state,
        currentDeliveryDepartmentPttype: action.payload.payload,
      };
    case DELIVERY_DEPARTMENT_PTTYPE_FAILURE:
      return {
        ...state,
        currentDeliveryDepartmentPttypeFailure: action.payload.error,
      };

    default:
      return state;
  }
}
