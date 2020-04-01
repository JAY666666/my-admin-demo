import Mock from "mockjs";
import user from "./user";
import order from "./order";

const mocks = [...user, ...order];


const responseFake = (url, type, response) => {
  return Mock.mock(new RegExp(url), type, response);
};

mocks.map(route => {
  return responseFake(route.url, route.type, route.response);
});
