//2
//CREATE STORE
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { coursesReducer, courseDetailReducer } from "../reducers/courses";
import { cartReducer } from "../reducers/cart";
import {
  userDetailsReducer,
  userReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "../reducers/user";
import { composeWithDevTools } from "redux-devtools-extension";
import { json } from "react-router-dom";

export default () => {
  const reducer = combineReducers({
    courseStore: coursesReducer,
    courseDetailStore: courseDetailReducer,
    cart: cartReducer,
    user: userReducer,
    register: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateReducer,
  });

  const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
