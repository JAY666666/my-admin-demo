import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
import { getToken } from "@/utils/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/",
    name: "index",
    component: layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home.vue"),
        meta: {
          icon: "el-icon-goods",
          title: "首页"
        }
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    component: layout,
    meta: {
      title: "实验",
      icon: "el-icon-star-on"
    },
    children: [
      {
        path: "test1",
        name: "test1",
        component: () => import("@/views/test1/index.vue"),
        meta: {
          title: "实验1"
        }
      },
      {
        path: "test2",
        name: "test2",
        component: () => import("@/views/test2/index.vue"),
        meta: {
          title: "实验2"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  const token = getToken();
  if (token) {
    if (to.path === "/login") {
      //if has token and to.path is login => home page
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      //如果前往的路径是白名单内的,就可以直接前往
      next();
    } else {
      //如果路径不是白名单内的,而且又没有登录,就跳转登录页面
      next("/login");
    }
  }
});

export default router;
