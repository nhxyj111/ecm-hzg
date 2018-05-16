import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://222.35.8.59:3000/v1/",
  // timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});
