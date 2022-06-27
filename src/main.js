import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueForm from "@lljj/vue-json-schema-form";
import "./plugins";
import "./directives";
import "./styles/index.scss";

Vue.config.productionTip = false;
Vue.component("VueForm", VueForm);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
