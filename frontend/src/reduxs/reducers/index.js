import { combineReducers } from "redux";

import scanuser from "./ScanUser";
import scanregister from "./ScanRegister";
import scanlocation from "./ScanLocation";

export default combineReducers({
  scanuser,
  scanregister,
  scanlocation
});
