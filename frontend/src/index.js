import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import swDev from "./swDev";

import { Provider } from "react-redux";
import configureStore from "./reduxs/store";

//ReactDOM.render(<App />, document.getElementById("root"));
// variable return in store
const { store } = configureStore();
const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<MyApp />, document.getElementById("root"));

// swDev();
