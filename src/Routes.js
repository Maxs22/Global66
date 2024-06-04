import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/InitialPage.vue";
import PokemonList from "./pages/PokemonList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/pokemonlist",
      name: "pokemonlist",
      component: PokemonList,
    },
  ],
});
