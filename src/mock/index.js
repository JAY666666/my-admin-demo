import Mock from "mockjs";
import user from "./user";

const mocks = [...user];
Mock.setup({
  timeout: 500
});

const responseFake = (url, type, response) => {
  return Mock.mock(new RegExp(url), type, response);
};

mocks.map(route => {
  return responseFake(route.url, route.type, route.response);
});
