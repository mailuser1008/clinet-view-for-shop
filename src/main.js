import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VuetifyOverlay from "vuetify-overlay";
import { VueMaskDirective } from "v-mask";

Vue.config.productionTip = false;
Vue.directive("mask", VueMaskDirective);

const options = {
  // You can set your default options here
};

Vue.use(Toast, options);
Vue.use(VuetifyOverlay);

new Vue({
  router,
  store,
  vuetify,
  Toast,
  VuetifyOverlay,
  render: (h) => h(App),
}).$mount("#app");
