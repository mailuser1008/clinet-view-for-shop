import Vue from "vue";
import Vuex from "vuex";
import registration from "./modules/register-page/registration";
import login from "./modules/login-page/login";
import items from "./modules/items-page/items";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    registration,
    login,
    items,
  },
});
