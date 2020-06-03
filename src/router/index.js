import Vue from "vue";
import VueRouter from "vue-router";
import Funds from "../components/Funds.vue";
import FundShow from "../components/FundShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "funds",
    component: Funds,
  },
  {
    path: "/:rbcFundCode",
    name: "fund-show",
    component: FundShow,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
