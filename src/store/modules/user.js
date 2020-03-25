import {
  login,
  getInfo
} from "@/api/user";
import {
  setToken,
  getToken,
  removeToken
} from "@/utils/auth";
import {
  resetRouter
} from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    roles: []
  }
}
const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_ROLES(state, roles) {
    state.roles = roles;
  }
};

const actions = {
  login({
    commit
  }, loginInfo) {
    return new Promise((resolve, reject) => {
      login(loginInfo).then(data => {
        const token = data.token;
        commit("SET_TOKEN", token);
        setToken(token);
        resolve(data);
      }).catch(error => reject(error))
    })
  },
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(userInfo => {
        const roles = userInfo.roles;
        commit("SET_ROLES", roles);
        resolve(userInfo)
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({
    commit
  }) {
    removeToken();
    commit("RESET_STATE");
    resetRouter();
    return Promise.resolve();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};