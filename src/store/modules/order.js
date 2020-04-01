import { getOrders } from "@/api/order";

const state = {
  orders: []
};

const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders;
  }
};

const actions = {
  getOrder({ commit }) {
    return new Promise((resolve, reject) => {
      getOrders()
        .then(data => {
          commit("SET_ORDERS", data);
          resolve(data);
        })
        .catch(error => reject(error));
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
