import { combineReducers } from "redux";

import menuReducer from "./menu-reducer";
import productsReducer from "./products-reducer";
import userReducer from "./user-reducer";

const allReducers = combineReducers({
  menu: menuReducer,
  products: productsReducer,
  user: userReducer
});

export default allReducers;
