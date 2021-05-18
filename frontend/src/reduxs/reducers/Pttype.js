// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  PTTYPE_BEGIN,
  PTTYPE_SUCCESS,
  PTTYPE_FAILURE,
} from "../actions/Pttype";

const initialState = {
  pttypes: [],
  status: "idle",
  error: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case PTTYPE_BEGIN:
      return {
        ...state,
        status: "loading",
      };
    case PTTYPE_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        pttypes: action.payload.payload,
      };
    case PTTYPE_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload.error.message,
      };
    default:
      return state;
  }
}
