// เรียกใช้ ข้อมูล Action จาก UsersActions
import {
  DEPART_BEGIN,
  DEPART_SUCCESS,
  DEPART_FAILURE,
} from "../actions/Depart";

// {
//   status: 'idle' | 'loading' | 'succeeded' | 'failed',
//   error: string | null
// }
const initialState = {
  departs: [],
  status: "idle",
  error: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case DEPART_BEGIN:
      return {
        ...state,
        status: "loading",
      };
    case DEPART_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        departs: action.payload.payload,
      };
    case DEPART_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload.error.message,
      };
    default:
      return state;
  }
}
