import axios from "axios";
import { apiUrl } from "@/env";

export default {
  namespaced: true,

  state: {
    pokemons: [],
    pokemon: {},
  },

  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    setPokemon(state, pokemon) {
      state.pokemon = pokemon;
    },
    clearPokemon(state) {
      state.pokemon = {};
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${apiUrl}/pokemon`)
          .then((response) => {
            let data = response.data.results;
            data.forEach((pokemon) => {
              pokemon.favorite = Math.random() < 0.5;
            });
            commit("setPokemons", data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async fetchPokemon({ commit }, name) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${apiUrl}/pokemon/${name}`)
          .then((response) => {
            const data = response.data;
            commit("setPokemon", data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    clearPokemon({ commit }) {
      commit("clearPokemon", {});
    },
  },
};
