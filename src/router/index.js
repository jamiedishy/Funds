import Vue from "vue";
import VueRouter from "vue-router";
import Funds from "../components/Funds.vue";
import FundShow from "../components/FundShow.vue";
import MyFunds from "../components/MyFunds.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "funds",
    component: Funds,
  },
  {
    path: "/fund/:rbcFundCode",
    name: "fund-show",
    component: FundShow,
    props: true
  },
   {
    path: "/my-funds",
    name: "my-funds",
    component: MyFunds,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
