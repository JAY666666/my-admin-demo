import Vue from "vue";
import store from "@/store";

const permission = Vue => {
  Vue.directive("permission", {
    inserted: function(el, binding) {
      const { value } = binding;
      const roles = store.getters && store.getters.roles;
      if (value && value instanceof Array && value.length > 0) {
        const permissionRoles = value;
        const hasPermission = roles.some(role => {
          return permissionRoles.includes(role);
        });
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el);
        }
      } else {
        throw new Error(`need roles! Like v-permission="['admin','editor']"`);
      }
    }
  });
};

Vue.use(permission);
