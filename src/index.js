import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";

const reducer = () => "State";

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
