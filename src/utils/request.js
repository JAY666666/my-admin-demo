import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = "Bearer " + store.getters.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    Message({
      message: "报错啦",
      type: "error"
    });

    return Promise.reject(error);
  }
);

export default service;
