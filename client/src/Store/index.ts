import { useSelector as reduxUseSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AppStore } from "../Interfaces";
import {
  userReducer,
  loadingReducer,
  authReducer,
  snackBarReducer,
} from "./user/reducers";
export default createStore(
  combineReducers({
    user: userReducer,
    loading: loadingReducer,
    auth: authReducer,
    toastr: snackBarReducer,
  }),
  applyMiddleware(thunk)
);

export * from "react-redux";

export function useSelector<T>(selector: (store: AppStore) => T): T {
  return reduxUseSelector(selector);
}
