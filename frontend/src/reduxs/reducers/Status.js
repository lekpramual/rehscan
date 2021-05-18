// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  STATUS_BEGIN,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from "../actions/Status";

const initialState = {
  currentStatus: [],
  currentStatusFailure: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_BEGIN:
      return {
        ...state,
        currentStatus: [],
      };
    case STATUS_SUCCESS:
      return {
        ...state,
        currentStatus: action.payload.payload,
      };
    case STATUS_FAILURE:
      return {
        ...state,
        currentStatusFailure: action.payload.error,
      };
    default:
      return state;
  }
}
