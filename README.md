# REDUX FUN

1.  Create a directory to host the project

```bash
mkdir ~/myproject
```

2.  Install create-react-app

```bash
cd ~/myproject
npx create-react-app .
```

3.  Add redux and react-redux to the project

```bash
yarn add redux react-redux
```

4.  Start the app

```bash
yarn start
```

5.  Create a Store

```javascript
// index.js
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
```

6.  Dispatch an action

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";

const reducer = () => "State";

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: "changeState",
  payload: {
    newState: "New state"
  }
};

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

7.  Update the store - reducer

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "changeState") {
    return action.payload.newState;
  }
  return "State";
};

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: "changeState",
  payload: {
    newState: "New state"
  }
};

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

8.  A more real world store/reducer

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";

const productsReducer = (state = [], action) => {
  return state;
};

const userReducer = (state = "", action) => {
  return state;
};

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(allReducers);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

9.  Setting an initial state

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";

const productsReducer = (state = [], action) => {
  return state;
};

const userReducer = (state = "", action) => {
  return state;
};

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(allReducers, {
  products: [{ name: "eggs" }],
  user: "Vini"
});

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

10. Adding redux dev tools extension

Add the extension to chrome. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";

const productsReducer = (state = [], action) => {
  return state;
};

const userReducer = (state = "", action) => {
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

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

11. A simple store update to experiment with redux dev tools

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";

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

console.log(store.getState());

const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "Santana"
  }
};

store.dispatch(updateUserAction);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

12. Using Provider

```javascript
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
```
