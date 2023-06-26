export type ThemeMode = "light" | "dark";

export type UserObject = {
  auth: boolean;
  user?: any;
  token?: string;
};

export type AppStore = {
  themeSwitch: { mode: ThemeMode };
  user: UserObject;
  loading: any;
  auth: UserObject;
  toastr: any;
};

export enum ActionTypes {
  SET_THEME = "SET_THEME",
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
  ADD_COURSE = "ADD_COURSE",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED",
  LOGOUT = "LOGOUT",
}

export enum StorageKeys {
  Theme = "theme",
  User = "user",
}

export enum UiLayout {
  Auth = "Auth",
  Dashboard = "Dashboard",
}

export type ApiRequestDataType = {
  url: string;
  method: "POST" | "GET";
  body?: string;
};

export type SubmitButtonPropType = {
  text: string;
  isSubmitting: boolean;
};

export type MainDashboardPropType = {
  title: string;
  greetings: string;
  setLoading?: (status: boolean) => void;
};

export type LoginDataType = {
  email: string;
  password?: string;
};

export type ResponseDataType = {
  status: boolean;
  message: string;
  data?: any;
};

export type MenuInterface = {
  divider: string;
  icon?: string;
  title: string;
  url?: string;
  target?: string;
  none: boolean;
  isAdmin?: boolean;
  level?: string;
};

export type MenuLabelInterface = {
  divider: string;
  text: string;
  none: boolean;
  isAdmin?: boolean;
};
