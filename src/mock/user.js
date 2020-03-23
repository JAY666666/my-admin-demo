const userToken = {
  admin: {
    token: "adminToken"
  },
  editor: {
    token: "editorToken"
  }
};

const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    name: "Super Admin"
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    name: "Normal Editor"
  }
};

export default {
  login: config => {
    const { username } = JSON.parse(config.body);
    const token = userToken[username];
    if (!token) {
      return {
        code: 666666,
        message: "密码或账户名错误！"
      };
    }
    return {
      data: token,
      code: 200
    };
  },
  getInfo: config => {
    const { token } = config.query;
    const info = users[token];
    if (!info) {
      return {
        code: 666666,
        message: "Login failed, unable to get user details."
      };
    }

    return {
      code: 200,
      data: info
    };
  }
};
