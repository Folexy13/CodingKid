import {
  ActionTypes,
  LoginDataType,
  StorageKeys,
  UserObject,
} from "../../Interfaces";
import { apiRequest } from "../../Shared/Utility/axiosUtility";
import { Storage } from "../../Shared/Utility/storageUtility";

export type UserActionType = {
  type: ActionTypes.SET_USER;
  user: UserObject;
};

export type AuthActionTypes = {
  type: ActionTypes.LOGIN_SUCCESS;
  payload: UserObject;
};

export function Action_SetUserAuth(user: UserObject) {
  window.localStorage.setItem(StorageKeys.User, JSON.stringify(user));
  return {
    type: ActionTypes.SET_USER,
    user,
  };
}

// Sign In User
export const login = ({ email, password }: LoginDataType) => async (
  dispatch: any
) => {
  const body = JSON.stringify({ email, password });

  try {
    const response: any = await apiRequest(
      { url: "/admin/login", method: "POST", body },
      dispatch
    );
    console.log(response);
    if (response.data.status) {
      Storage.setItem("user", JSON.stringify(response.data.data.admin));
      Storage.setItem("token", response.data.data.token);
      return response.data;
    } else {
      await dispatch({
        type: ActionTypes.LOGIN_FAILED,
      });
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
    await dispatch({
      type: ActionTypes.LOGIN_FAILED,
    });
    return false;
  }
};

// Logout user
export const logout = () => {
  Storage.removeItem("user");
  window.location.assign("/login");
};
