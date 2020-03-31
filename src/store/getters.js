const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  name: state => state.user.name,
  permission_routes: state => state.permission.routes
};

export default getters;
