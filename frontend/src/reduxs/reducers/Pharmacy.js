// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  PHARMACY_BEGIN,
  PHARMACY_SUCCESS,
  PHARMACY_FAILURE,
} from "../actions/Pharmacy";

const initialState = {
  currentPharmacy: [],
  currentPharmacyFailure: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case PHARMACY_BEGIN:
      return {
        ...state,
        currentPharmacy: [],
      };
    case PHARMACY_SUCCESS:
      return {
        ...state,
        currentPharmacy: action.payload.payload,
      };
    case PHARMACY_FAILURE:
      return {
        ...state,
        currentPharmacyFailure: action.payload.error,
      };
    default:
      return state;
  }
}
