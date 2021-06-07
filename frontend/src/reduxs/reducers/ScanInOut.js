// เรียกใช้ ข้อมูล Action จาก UsersActions
import { SHOW_BEGIN, SHOW_SUCCESS, SHOW_FAILURE } from "../actions/ScanInOut";

const initialState = {
  showData: [],
  showStatus: "idle",
  showFailure: null
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_BEGIN:
      return {
        ...state,
        showStatus: "loading"
      };
    case SHOW_SUCCESS:
      return {
        ...state,
        showStatus: "success",
        showData: action.payload.payload
      };
    case SHOW_FAILURE:
      return {
        ...state,
        showStatus: "failed",
        showFailure: action.payload.error
      };
    default:
      return state;
  }
}
