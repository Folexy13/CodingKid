import axios from "axios";
import { ApiRequestDataType } from "../../Interfaces";
import { Storage } from "./storageUtility";

// Api URL
export const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const apiRequest = async (
  { url, method, body }: ApiRequestDataType,
  dispatch?: any
) => {
  // const user = Storage.getItem('user')
  const auth = Storage.getItem("token");
  try {
    const response = await axios.request({
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
      validateStatus: function(status_1) {
        return status_1 >= 200 && status_1 < 500; // default
      },
    });
    if (response.status === 401) {
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
    }
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
