import { combineReducers } from "redux";

import scanuser from "./ScanUser";
import scanregister from "./ScanRegister";

export default combineReducers({
  scanuser,
  scanregister
});
