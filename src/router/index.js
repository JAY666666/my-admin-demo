import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "index",
  component: layout,
  children: [{
    path: 'home',
    name: "home",
    component: () => import("@/views/home.vue")
  }]
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;