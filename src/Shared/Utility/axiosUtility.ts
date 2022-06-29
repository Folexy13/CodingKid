import axios from "axios";
import { ApiRequestDataType } from "../../Interfaces";
import { Storage } from "./storageUtility";

// Api URL
export const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const apiRequest = (
  { url, method, body }: ApiRequestDataType,
  dispatch?: any
) => {
  // const user = Storage.getItem('user')
  const auth = Storage.getItem("token");
  return axios
    .request({
      url,
      method,
      baseURL: apiUrl,
      data: body,
      headers: {
        Authorization: `Bearer ${auth}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "json",
      validateStatus: function(status) {
        return status >= 200 && status < 500; // default
      },
    })
    .then((response) => {
      if (response.status === 401) {
        dispatch({
          type: "LOGOUT_SUCCESS",
        });
      }
      return response;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
