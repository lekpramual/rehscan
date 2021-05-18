// เรียกใช้ ข้อมูล Action จาก UsersActions
import { LAB_BEGIN, LAB_SUCCESS, LAB_FAILURE } from "../actions/Lab";

const initialState = {
  labs: [],
  status: "idle",
  error: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case LAB_BEGIN:
      return {
        ...state,
        status: "loading",
      };
    case LAB_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        labs: action.payload.payload,
      };
    case LAB_FAILURE:
      return {
        ...state,

        status: "failed",
        error: action.payload.error.message,
      };
    default:
      return state;
  }
}
