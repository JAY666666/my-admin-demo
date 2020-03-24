import { asyncRoutes, constantRoutes } from "@/router/index";

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

//过滤syncRoutes筛选出可访问的权限路由表
function filterSyncRoutes(routes, roles) {
  const res = [];

  routes.forEach(route => {
    if (hasPermission(roles, route)) {
      if (route.children) {
        route.children = filterSyncRoutes(route.children, roles);
      }
      res.push(route);
    }
  });

  return res;
}

const state = {
  routes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes;
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes || []; //当roles包括admin时，可访问所以路由
      } else {
        accessedRoutes = filterSyncRoutes(asyncRoutes, roles); //没有admin时，筛选出其可访问的路由表
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
