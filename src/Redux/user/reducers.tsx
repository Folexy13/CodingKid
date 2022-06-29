import { ActionTypes, StorageKeys, UserObject } from "../../Interfaces";
import { UserActionType, AuthActionTypes } from "./actions";

const userData =
  typeof window !== "undefined"
    ? window.localStorage.getItem(StorageKeys.User)
    : null;
const defaultState: UserObject = userData
  ? JSON.parse(userData)
  : { auth: false };
const authDefaultState = {
  user: null,
  token: null,
};

export const userReducer = (state = defaultState, action: UserActionType) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...action.user };
    default:
      return state;
  }
};

export const authReducer = (
  state = authDefaultState,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

const initialState = { isLoading: false };
export const loadingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "PAGE_LOADING":
      return { ...state, isLoading: true };
    case "PAGE_LOADED":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const stackBarState = { show: false, type: "success", msg: "" };
export const snackBarReducer = (state = stackBarState, action: any) => {
  switch (action.type) {
    case "NOTE_ALERT":
      return {
        ...state,
        show: action.payload.show,
        type: action.payload.type,
        msg: action.payload.msg,
      };
    case "NOTE_CLOSE":
      return { ...state, show: false };
    default:
      return state;
  }
};
