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
