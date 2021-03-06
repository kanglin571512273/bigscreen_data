import Vue from "vue";
import Router from "vue-router";
import index from "@/views/index";
import antbox from "@/views/antbox";
// import details from "@/views/details";
import mobile from "@/views/mobile";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/antbox",
      name: "antbox",
      component: antbox
    },
    {
      path: "/details",
      name: "details",
      component: () => import(/* webpackChunkName: "details" */ '@/views/details')
      // component: details
    },
    {
      path: "/mobile",
      name: "mobile",
      component: mobile
    },
  ]
});
