import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const productsReducer = (state = [], action) => {
  return state;
};

const userReducer = (state = "", action) => {
  switch (action.type) {
    case "updateUser":
      return action.payload.user;
  }
  return state;
};

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(
  allReducers,
  {
    products: [{ name: "eggs" }],
    user: "Vini"
  },
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
