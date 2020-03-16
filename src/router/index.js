import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "index",
    component: layout,
    meta: {
      icon: 'el-icon-goods',
      title: '首页'
    },
    children: [{
      path: "home",
      name: "home",
      component: () => import("@/views/home.vue"),
      meta: {
        title: '首页'
      }
    }]
  },
  {
    path: "test",
    name: "test",
    component: layout,
    redirect: "test1",
    meta: {
      title: "实验",
      icon: "el-icon-star-on"
    },
    children: [{
      path: "test1",
      name: "test1",
      component: () => import("@/views/test1/index.vue"),
      meta: {
        title: '实验1'
      }
    }, {
      path: "test2",
      name: "test2",
      component: () => import("@/views/test2/index.vue"),
      meta: {
        title: '实验2'
      }
    }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;