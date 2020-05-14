import axios, { AxiosInstance } from "axios";

let myAxiosInstance: AxiosInstance;

export const getAxiosInstance = () => {
  if (myAxiosInstance) {
    return myAxiosInstance;
  }

  myAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "content-type": "application/json"
    },
    responseType: "json"
  });
  return myAxiosInstance;
};
