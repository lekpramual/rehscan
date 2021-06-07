import { combineReducers } from "redux";

import scanuser from "./ScanUser";
import scanregister from "./ScanRegister";
import scanlocation from "./ScanLocation";
import scaninout from "./ScanInOut";

export default combineReducers({
  scanuser,
  scanregister,
  scanlocation,
  scaninout
});
