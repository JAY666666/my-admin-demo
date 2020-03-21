const userToken = {
  admin: {
    token: "adminToken"
  },
  editor: {
    token: "editorToken"
  }
};
export default {
  login: config => {
    const { username } = JSON.parse(config.body);
    const token = userToken[username];
    if (!token) {
      return {
        code: 666666
      };
    }
    return {
      data: token,
      code: 888888
    };
  }
};
