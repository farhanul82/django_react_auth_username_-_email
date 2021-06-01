import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Thunk from "redux-thunk";
import { Auth } from "./Reducer/auth";

const store = createStore(
  combineReducers({
    auth: Auth,
  }),
  composeWithDevTools(applyMiddleware(Thunk))
);
export default store;