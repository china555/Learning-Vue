import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Joke from "@/views/card.vue";
import detailJoke from "@/views/SeeDetail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/joke",
    name: "Joke",
    component: Joke,
  },
  {
    path: "/joke/detail/:id",
    name: "detail",
    component: detailJoke,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
