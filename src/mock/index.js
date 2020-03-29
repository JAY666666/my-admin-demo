import Mock from "mockjs";
import user from "./user";

const mocks = [...user];
Mock.setup({
  timeout: 500
});

const responseFake = (url, type, response) => {
  return Mock.mock(
    new RegExp(url), //string url => regexp url 文档上string也可以，但跑起来有bug
    type,
    response
  );
};

mocks.map(route => {
  return responseFake(route.url, route.type, route.response);
});
