import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/Hello",
    name: "Hello",
    component: () => import( /* webpackChunkName: "about" */ "../components/Hello.vue")
  },
  {
    path: "/Hello2",
    name: "Hello2",
    component: () => import( /* webpackChunkName: "about" */ "../components/Hello2.vue")
  }, {
    path: "/Hello3",
    name: "Hello3",
    component: () => import( /* webpackChunkName: "about" */ "../components/Hello3.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;