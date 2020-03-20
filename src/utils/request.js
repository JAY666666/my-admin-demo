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

    if (res.code === 0) {
      return res.data;
    } else if (typeof res.code === "number") {
      Message({
        message: res.error.message,
        type: "error"
      });

      if (res.code === 401) {
        store.dispatch("user/logout");
        location.reload();
      }

      return Promise.reject(new Error(res.error.message));
    } else {
      return res;
    }
  },
  error => {
    Message({
      message: error.message,
      type: "error"
    });

    return Promise.reject(error);
  }
);

export default service;
