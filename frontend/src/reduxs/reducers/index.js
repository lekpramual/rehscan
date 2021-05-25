import { combineReducers } from "redux";
import login from "./Login";
import drugpoint from "./DrugPoint";
import patients from "./Patient";
import address from "./Address";
import delivery from "./Delivery";
import apppointment from "./Apppointment";
import status from "./Status";
import pttypes from "./Pttype";
import shipping from "./Shipping";
import pharmacy from "./Pharmacy";
import departs from "./Depart";
import labs from "./Lab";
import shop from "./Shop";
import healths from "./Health";
import scanuser from "./ScanUser";

export default combineReducers({
  login,
  drugpoint,
  patients,
  address,
  delivery,
  apppointment,
  status,
  pttypes,
  shipping,
  pharmacy,
  departs,
  labs,
  shop,
  healths,
  scanuser
});
