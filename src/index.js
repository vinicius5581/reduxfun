import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import store from "./store";
import App from "./containers/App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App someProp="something" />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
