// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  SHIPPING_BEGIN,
  SHIPPING_SUCCESS,
  SHIPPING_FAILURE,
} from "../actions/Shipping";

const initialState = {
  currentShipping: [],
  currentShippingFailure: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case SHIPPING_BEGIN:
      return {
        ...state,
        currentShipping: [],
      };
    case SHIPPING_SUCCESS:
      return {
        ...state,
        currentShipping: action.payload.payload,
      };
    case SHIPPING_FAILURE:
      return {
        ...state,
        currentShippingFailure: action.payload.error,
      };
    default:
      return state;
  }
}
