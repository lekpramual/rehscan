// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  DRUGADDRESS_BEGIN,
  DRUGADDRESS_SUCCESS,
  DRUGADDRESS_FAILURE,
  CREATEADDRESS_BEGIN,
  CREATEADDRESS_SUCCESS,
  CREATEADDRESS_FAILURE,
  UPDATEADDRESS_BEGIN,
  UPDATEADDRESS_SUCCESS,
  UPDATEADDRESS_FAILURE
} from "../actions/Address";

const initialState = {
  currentDrugAddress: [],
  currentDrugAddressFailure: null,

  createAddress: [],
  createAddressFailure: null,

  updateAddress: [],
  updateAddressFailure: null
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case DRUGADDRESS_BEGIN:
      return {
        ...state,
        currentDrugAddress: []
      };
    case DRUGADDRESS_SUCCESS:
      return {
        ...state,
        currentDrugAddress: action.payload.payload
      };
    case DRUGADDRESS_FAILURE:
      return {
        ...state,
        currentDrugAddressFailure: action.payload.error
      };
    case CREATEADDRESS_BEGIN:
      return {
        ...state,
        createAddress: []
      };
    case CREATEADDRESS_SUCCESS:
      return {
        ...state,
        createAddress: action.payload.payload
      };
    case CREATEADDRESS_FAILURE:
      return {
        ...state,
        createAddressFailure: action.payload.error
      };
    case UPDATEADDRESS_BEGIN:
      return {
        ...state,
        updateAddress: []
      };
    case UPDATEADDRESS_SUCCESS:
      return {
        ...state,
        updateAddress: action.payload.payload
      };
    case UPDATEADDRESS_FAILURE:
      return {
        ...state,
        updateAddress: action.payload.error
      };
    default:
      return state;
  }
}
