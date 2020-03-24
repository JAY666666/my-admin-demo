import { login, getInfo } from "@/api/user";
import { setToken, getToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken(),
  roles: []
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  REMOVE_TOKEN(state) {
    state.token = "";
  },
  SET_ROLES(state, roles) {
    state.roles = roles;
  }
};

const actions = {
  login({ commit }, loginInfo) {
    return login(loginInfo).then(data => {
      const token = data.token;
      commit("SET_TOKEN", token);
      setToken(token);
      return data;
    });
  },
  getInfo({ commit, state }) {
    return getInfo(state.token).then(userInfo => {
      const roles = userInfo.roles;
      commit("SET_ROLES", roles);
      return userInfo;
    });
  },
  logout({ commit }) {
    removeToken();
    commit("REMOVE_TOKEN");
    return Promise.resolve();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
