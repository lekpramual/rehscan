import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// localhost
import logger from "redux-logger";
// root all reducer on redux
import rootReducer from "../reducers";

export default () => {
  // create reducer redux
  let store = createStore(rootReducer, applyMiddleware(logger, thunk));
  // to server
  //let store = createStore(rootReducer, applyMiddleware(thunk));
  // return variable in store persistor
  return { store };
};
