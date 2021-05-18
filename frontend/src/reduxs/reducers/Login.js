const initialState = {
  currentUser: [],
  currentError: null,
  currentFailure: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload };
    case "LOGIN_FAILURE":
      return { ...state, currentFailure: "ชื่อ หรือ รหัสผ่าน ผิดพลาด" };
    case "LOGIN_ERROR":
      return { ...state, currentError: action.payload.error.message };
    case "LOGOUT_USER":
      return { ...state, currentUser: [] };
    case "LOGIN_LOGGEDIN":
      return { ...state, currentUser: [] };
    case "LOGIN_PROFILE":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}
