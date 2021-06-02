// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  CREATE_BEGIN,
  CREATE_SUCCESS,
  CREATE_FAILURE
} from "../actions/ScanRegister";

const initialState = {
  createData: [],
  createStatus: "idle",
  createFailure: null
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
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
