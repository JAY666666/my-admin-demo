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
        .then(orders => {
          commit("SET_ORDERS", orders);
          resolve(orders);
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
