<template>
  <div v-if="isLoading">
    <loadingPoke />
  </div>
  <div v-else>
    <b-container class="pokemonList">
      <b-row class="justify-content-center mt-5">
        <b-col cols="12" md="8" lg="8">
          <b-form @submit.stop.prevent>
            <b-input-group class="search-input-group">
              <b-form-input
                v-model="search"
                placeholder="Search"
                class="search-input"
              >
              </b-form-input>
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>
      <div v-if="filteredPokemons.length === 0" class="text-center">
        <h2 class="p-3 m-2">Uh-oh!</h2>
        <h4 class="p-2">You look lost on your journey!</h4>
        <b-button class="b-button-back" to="/">Go back home</b-button>
      </div>
      <template v-else>
        <b-row class="mt-3 justify-content-center">
          <b-col
            v-for="pokemon of filteredPokemons"
            :key="pokemon.name"
            cols="12"
            md="8"
            lg="8"
            class="mb-4"
            v-b-modal="'modal-pokemon'"
            @click="setPokemon(pokemon)"
          >
            <b-card>
              <b-row>
                <b-col class="text-left">
                  <h4>{{ pokemon.name }}</h4>
                </b-col>
                <b-col class="text-right">
                  <img
                    v-if="pokemon.favorite"
                    src="../assets/Active.svg"
                    alt="favorite"
                  />
                  <img v-else src="../assets/Disabled.svg" alt="not-favorite" />
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <selectedFavorites @filter-changed="handleFilterChange" />
      </template>
      <modalPokemon :pokemon="pokemon" />
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import selectedFavorites from "./SelectedFavorites.vue";
import modalPokemon from "../components/ModalPokemon.vue";
import loadingPoke from "../components/LoadingPoke.vue";

export default {
  name: "PokemonList",
  components: {
    selectedFavorites,
    modalPokemon,
    loadingPoke,
  },
  computed: {
    ...mapState("pokemon", {
      pokemons: (state) => state.pokemons,
    }),
    filteredPokemons() {
      let filtered = this.pokemons;
      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        filtered = filtered.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm)
        );
      }
      if (this.activeFilter === "favorite") {
        filtered = filtered.filter((pokemon) => pokemon.favorite);
      }
      // retorn cada elemento con la primera letra en mayuscula
      filtered = filtered.map((pokemon) => {
        return {
          ...pokemon,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        };
      });
      return filtered;
    },
  },
  data() {
    return {
      search: "",
      activeFilter: "all",
      pokemon: {},
      isLoading: true,
    };
  },
  methods: {
    ...mapActions("pokemon", ["fetchPokemons", "fetchPokemon"]),

    setPokemon(pokemon) {
      this.pokemon = pokemon;
      const name = pokemon.name.toLowerCase();
      this.fetchPokemon(name);
    },

    handleFilterChange(filter) {
      this.activeFilter = filter;
    },
  },
  mounted() {
    this.isLoading = true;

    setTimeout(() => {
      this.fetchPokemons();
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }, 2000);
  },
};
</script>

<style scoped>
.pokemonList {
  padding: 0 10px;
}

.card {
  cursor: pointer;
  border: none;
  border-radius: 10px;
}

.b-button {
  margin: 0 5px;
  border-radius: 20px;
  padding: 8px 16px;
  transition: background-color 0.3s;
  padding: 0.5rem 1rem;
  border: none;
  width: 20%;
  background-color: var(--color-botones-normal);
}
.b-button-back {
  margin: 0 5px;
  border-radius: 20px;
  padding: 8px 16px;
  transition: background-color 0.3s;
  padding: 0.5rem 1rem;
  border: none;
  width: 200px;
  background-color: var(--color-botones-normal);
}
:hover .b-button-back {
  background-color: var(--boton-presionado);
}
</style>
