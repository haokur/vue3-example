import Detail from "@/pages/home/detail.vue";
import Home from "@/pages/home/home.vue";
import List from "@/pages/home/list.vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/list",
    name: "PageList",
    component: List,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/detail",
    name: "PageDetail",
    component: Detail,
    meta: {
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
