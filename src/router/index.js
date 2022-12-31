import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/",
    component: () => import("@views/List.vue"),
  },
  {
    path: "/html/instance",
    component: () => import("../App.vue"),
    name: 'instance'
  },
];
const router = new VueRouter({
  mode: "history", // 配置路由模式
  base: "/", // 应用的基路径
  routes: constantRoutes,
});

export default router;
