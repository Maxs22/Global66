<template>
  <b-navbar fixed="bottom" class="footer-navbar" variant="light">
    <b-navbar-nav>
      <b-button
        class="b-button"
        @click="filterPokemons('all')"
        :style="{ backgroundColor: allButtonColor }"
      >
        <b-icon icon="list-task"></b-icon>
        All
      </b-button>
      <b-button
        class="b-button"
        @click="filterPokemons('favorite')"
        :style="{ backgroundColor: favoritesButtonColor }"
      >
        <b-icon icon="star"></b-icon>
        Favorites
      </b-button>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "SelectedFavorites",
  data() {
    return {
      activeFilter: "all",
    };
  },
  computed: {
    allButtonColor() {
      return this.activeFilter === "all"
        ? "var(--color-botones-normal)"
        : "var(--texto-input) ";
    },
    favoritesButtonColor() {
      return this.activeFilter === "favorite"
        ? "var(--color-botones-normal)"
        : "var(--texto-input)";
    },
  },
  methods: {
    filterPokemons(filter) {
      this.activeFilter = filter;
      this.$emit("filter-changed", filter);
    },
  },
};
</script>

<style scoped>
.navbar-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}
.footer-navbar {
  background-color: var(--color-claro);
}

.b-button {
  margin: 0 5px;
  border-radius: 20px;
  padding: 8px 16px;
  transition: background-color 0.3s;
  padding: 0.5rem 1rem;
  border: none;
  width: 20%;
}
@media (max-width: 643px) {
  .b-button {
    width: 50%;
  }
}
</style>
