import request from "@/utils/axiosApi.js";

export function reqLogin(query) {
  return request({
    url: "/api/doLogin",
    method: "post",
    data: query,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
}

export function reqLayout(query) {
  return request({
    url: "/api/logout",
    method: "get",
    data: query,
  });
}
