import Vue from "vue";
import App from "./App.vue";

import store from "./store";
import router from "./Routes";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
