// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  HEALTHADD_BEGIN,
  HEALTHADD_SUCCESS,
  HEALTHADD_FAILURE,
  HEALTHFETCH_BEGIN,
  HEALTHFETCH_SUCCESS,
  HEALTHFETCH_FAILURE,
  HEALTHGET_BEGIN,
  HEALTHGET_SUCCESS,
  HEALTHGET_FAILURE,
} from "../actions/Health";

const initialState = {
  healths: [],
  health: [],
  status: "idle",
  error: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case HEALTHADD_BEGIN:
      return {
        ...state,
        status: "loading",
      };
    case HEALTHADD_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        healths: action.payload.payload,
      };
    case HEALTHADD_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload.error.message,
      };
    // FETCH
    case HEALTHFETCH_BEGIN:
      return {
        ...state,
        status: "loading",
      };
    case HEALTHFETCH_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        healths: action.payload.payload,
      };
    case HEALTHFETCH_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload.error.message,
      };

    // GET
    case HEALTHGET_BEGIN:
      return {
        ...state,
        //status: "loading",
      };
    case HEALTHGET_SUCCESS:
      return {
        ...state,
        //status: "succeeded",
        health: action.payload.payload,
      };
    case HEALTHGET_FAILURE:
      return {
        ...state,
        //status: "failed",
        error: action.payload.error.message,
      };
    default:
      return state;
    //throw new Error();
  }
}
