// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  INDEX_BEGIN,
  INDEX_SUCCESS,
  INDEX_FAILURE,
  CREATE_BEGIN,
  CREATE_SUCCESS,
  CREATE_FAILURE
} from "../actions/ScanLocation";

const initialState = {
  indexData: [],
  indexStatus: "idle",
  indexFailure: null,
  createData: [],
  createStatus: "idle",
  createFailure: null
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case INDEX_BEGIN:
      return {
        ...state,
        indexStatus: "loading"
      };
    case INDEX_SUCCESS:
      return {
        ...state,
        indexStatus: "success",
        indexData: action.payload.payload
      };
    case INDEX_FAILURE:
      return {
        ...state,
        indexStatus: "failed",
        indexFailure: action.payload.error
      };
    case CREATE_BEGIN:
      return {
        ...state,
        createStatus: "loading"
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        createStatus: "success",
        createData: action.payload.payload
      };
    case CREATE_FAILURE:
      return {
        ...state,
        createStatus: "failed",
        createFailure: action.payload.error
      };
    default:
      return state;
  }
}
