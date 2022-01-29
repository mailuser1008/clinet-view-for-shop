import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/homePage.vue"),
  },
  {
    path: "/add-to-card",
    name: "addToCardPage",
    component: () =>
      import(
        /* webpackChunkName: addToCardPage */ "../views/addToCardPage.vue"
      ),
  },
  {
    path: "/personal-data",
    name: "personalAccountOage",
    component: () =>
      import(
        /* webpackChunkName: personalAccountPage */ "../views/personalAccountPage.vue"
      ),
  },
  {
    path: "/shop",
    name: "onlineSHopPage",
    component: () =>
      import(
        /* webpackChunkName: onlineShopPage */ "../views/onlineShopPage.vue"
      ),
  },
  {
    path: "/admin",
    name: "adminPage",
    component: () =>
      import(/* webpackChunkName: onlineShopPage */ "../views/adminPage.vue"),
  },
  {
    path: "/items-category",
    name: "itemsCategoryPage",
    component: () =>
      import(
        /* webpackChunkName: itemsCategoryPage */ "../views/itemsCategoryPage"
      ),
  },
  {
    path: "/users-data",
    name: "usersDataPage",
    component: () =>
      import(/* webpackChunkName: usersDataPage */ "../views/usersDataPage"),
  },
  {
    path: "/login",
    name: "loginPage",
    component: () =>
      import(/* webpackChunkName: loginPage */ "../views/loginPage"),
  },
  {
    path: "/register",
    name: "registerPage",
    component: () =>
      import(/* webpackChunkName: registerPage */ "../views/registerPage"),
  },
  {
    path: "/orders",
    name: "ordersPage",
    component: () =>
      import(/* webpackChunkName: ordersPage */ "../views/ordersPage.vue"),
  },
  {
    path: "/canceled-orders",
    name: "canceledOrders",
    component: () =>
      import(
        /* webpackChunkName: canceledOrders */ "../views/canceledOrders.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
