import Mock from "mockjs";
import loginAPI from "./user";

Mock.setup({
  timeout: 500
});

Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/getInfo/, "get", loginAPI.getInfo);
export default Mock;
