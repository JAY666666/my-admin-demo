import Mock from "./mock";
import {
    Message
} from "element-ui";

const loginAPI = {
    login: config => {
        const data = JSON.parse(config.body);
        const token = data.token;
        if (!token) {
            Message({
                message: "token不存在鸭！",
                type: "error"
            })
        } else {
            return data;
        }
    }
};

Mock.mock("/login", "post", loginAPI.login);