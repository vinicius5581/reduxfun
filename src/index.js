import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  reducers,
  {
    products: [{ name: "eggs" }],
    user: "Vini"
  },
  allStoreEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <App someProp="something" />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
