import { login } from "@/api/user";
import { setToken, getToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken()
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  }
};

const actions = {
  login({ commit }, loginInfo) {
    return login(loginInfo).then(userInfo => {
      const token = userInfo.token;
      commit("SET_TOKEN", token);
      setToken(token);
      return userInfo;
    });
  },
  logout({ commit }) {
    removeToken();
    commit("SET_TOKEN", "");
    return Promise.resolve();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
