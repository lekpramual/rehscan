// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  SACNUSER_BEGIN,
  SACNUSER_SUCCESS,
  SACNUSER_FAILURE
} from "../actions/ScanUser";

const initialState = {
  currentScan: [],
  currentScanFailure: null
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case SACNUSER_BEGIN:
      return {
        ...state,
        currentScan: []
      };
    case SACNUSER_SUCCESS:
      return {
        ...state,
        currentScan: action.payload.payload
      };
    case SACNUSER_FAILURE:
      return {
        ...state,
        currentScanFailure: action.payload.error
      };
    default:
      return state;
  }
}
