import axios from "axios";
import { proxy } from "./constUtils.js";

const instance = axios.create({
  baseURL: proxy,
});
instance.interceptors.request.use(function (config) {
  config.headers["Authorization"] = JSON.parse(
    localStorage.getItem("user")
  )?.token;
  return config;
});
export default instance;
