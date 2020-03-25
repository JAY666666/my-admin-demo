import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
import { getToken } from "@/utils/auth";
import store from "@/store";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
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
        component: () => import("@/views/common/text1.vue"),
        meta: {
          title: "实验1"
        }
      },
      {
        path: "test2",
        name: "test2",
        component: () => import("@/views/common/text2.vue"),
        meta: {
          title: "实验2"
        }
      }
    ]
  }
];

export const asyncRoutes = [
  {
    path: "/user",
    name: "user",
    component: layout,
    redirect: "/user/user1",
    alwaysShow: true,
    meta: {
      title: "用户",
      icon: "el-icon-user"
    },
    children: [
      {
        path: "/user/user1",
        name: "user1",
        component: () => import("@/views/user/user1.vue"),
        meta: {
          title: "admin",
          roles: ["admin"]
        }
      },
      {
        path: "/user/user2",
        name: "user2",
        component: () => import("@/views/user/user2.vue"),
        meta: {
          title: "editor",
          roles: ["editor"]
        }
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

const creatRouter = () =>
  new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: constantRoutes
  });

const router = creatRouter();

const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  const token = getToken();
  if (token) {
    if (to.path === "/login") {
      //if has token and to.path is login => home page
      next("/");
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch("user/getInfo")
          .then(userInfo => {
            const roles = userInfo.roles;
            store
              .dispatch("permission/generateRoutes", roles)
              .then(accessedRoutes => {
                router.addRoutes(accessedRoutes);
                next({
                  ...to,
                  replace: true
                });
              });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      //如果前往的路径是白名单内的,就可以直接前往
      next();
    } else {
      //如果路径不是白名单内的,而且又没有登录,就跳转登录页面,成功之后，跳转回想去的页面
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  }
});

export function resetRouter() {
  const newRouter = creatRouter();
  router.matcher = newRouter.matcher; // 动态更新路由时，需要resetRouter
}

export default router;
