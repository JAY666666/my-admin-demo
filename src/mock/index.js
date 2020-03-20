import Mock from "mockjs";
import loginAPI from "./user";

Mock.setup({
  timeout: 500
});

Mock.mock(/\/login/, "post", loginAPI.login);
export default Mock;
