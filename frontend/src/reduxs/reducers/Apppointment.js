// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  APPPOINTMENT_BEGIN,
  APPPOINTMENT_SUCCESS,
  APPPOINTMENT_FAILURE,
  APPPOINTMENT_VN_BEGIN,
  APPPOINTMENT_VN_SUCCESS,
  APPPOINTMENT_VN_FAILURE,
} from "../actions/Apppointment";

const initialState = {
  currentApppointment: [],
  currentApppointmentFailure: null,
  currentApppointmentVn: [],
  currentApppointmentVnFailure: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case APPPOINTMENT_BEGIN:
      return {
        ...state,
        currentApppointment: [],
      };
    case APPPOINTMENT_SUCCESS:
      return {
        ...state,
        currentApppointment: action.payload.payload,
      };
    case APPPOINTMENT_FAILURE:
      return {
        ...state,
        currentApppointmentFailure: action.payload.error,
      };
    case APPPOINTMENT_VN_BEGIN:
      return {
        ...state,
        currentApppointmentVn: [],
      };
    case APPPOINTMENT_VN_SUCCESS:
      return {
        ...state,
        currentApppointmentVn: action.payload.payload,
      };
    case APPPOINTMENT_VN_FAILURE:
      return {
        ...state,
        currentApppointmentVnFailure: action.payload.error,
      };
    default:
      return state;
  }
}
