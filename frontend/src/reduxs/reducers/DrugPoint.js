// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  DRUGPOINT_BEGIN,
  DRUGPOINT_SUCCESS,
  DRUGPOINT_FAILURE,
  DRUGPOINTID_BEGIN,
  DRUGPOINTID_SUCCESS,
  DRUGPOINTID_FAILURE,
} from "../actions/DrugPoint";

const initialState = {
  currentDrugPoint: [],
  currentDrugPointFailure: null,
  currentDrugPointID: [],
  currentDrugPointFailureID: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case DRUGPOINT_BEGIN:
      return {
        ...state,
        currentDrugPoint: [],
      };
    case DRUGPOINT_SUCCESS:
      return {
        ...state,
        currentDrugPoint: action.payload.payload,
      };
    case DRUGPOINT_FAILURE:
      return {
        ...state,
        currentDrugPointFailure: action.payload.error,
      };
    case DRUGPOINTID_BEGIN:
      return {
        ...state,
        currentDrugPointID: [],
      };
    case DRUGPOINTID_SUCCESS:
      return {
        ...state,
        currentDrugPointID: action.payload.payload,
      };
    case DRUGPOINTID_FAILURE:
      return {
        ...state,
        currentDrugPointFailureID: action.payload.error,
      };
    default:
      return state;
  }
}
