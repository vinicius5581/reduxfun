import { combineReducers } from "redux";

import menuReducer from "./menu-reducer";
import pagesReducer from "./pages-reducer";
import productsReducer from "./products-reducer";
import userReducer from "./user-reducer";

const allReducers = combineReducers({
  menu: menuReducer,
  pages: pagesReducer,
  products: productsReducer,
  user: userReducer
});

export default allReducers;
