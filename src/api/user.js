import request from "@/utils/request";

export function login(data) {
  request({
    url: "/login",
    method: "post",
    data
  });
}
