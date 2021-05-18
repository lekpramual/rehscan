// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  PATIENT_BEGIN,
  PATIENT_SUCCESS,
  PATIENT_FAILURE,
} from "../actions/Patient";

const initialState = {
  patients: [],
  status: "idle",
  error: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case PATIENT_BEGIN:
      return {
        ...state,
        status: "loading",
      };
    case PATIENT_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        patients: action.payload.payload,
      };
    case PATIENT_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload.error.message,
      };
    default:
      return state;
  }
}
