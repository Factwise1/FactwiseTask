import { combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

import {
  userListReducer,
  userDetailReducer,
  userUpdateReducer,
  userDeleteReducer
} from "./reducer/userReducer";

const reducer = combineReducers({
  userList: userListReducer,
  userDetail: userDetailReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer
});

const middlewares = [thunk];

const store = configureStore(
  { reducer: reducer },
  compose(applyMiddleware(...middlewares))
);

export default store;
