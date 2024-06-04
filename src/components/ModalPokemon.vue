<template>
  <b-modal
    id="modal-pokemon"
    ref="modal-pokemon"
    @hidden="clearDetails"
    hide-header
    hide-footer
    centered
    size="lg"
    class="custom-modal"
  >
    <div class="background-container">
      <img src="../assets/background.svg" alt="pokemon" class="fondo-img" />
    </div>
    <b-icon icon="x-circle-fill" class="close" @click="clearDetails"></b-icon>

    <img
      :src="details.sprites ? details.sprites.front_default : ''"
      alt="pokemon"
      class="img-pokemon"
    />
    <div class="pokemon-details">
      <div class="detail-item">
        <strong>Name: </strong> <span> {{ pokemonName }}</span>
      </div>
      <hr />
      <div class="detail-item">
        <strong>Weight: </strong> <span> {{ details.weight }}</span>
      </div>
      <hr />
      <div class="detail-item">
        <strong>Height: </strong> <span> {{ details.height }}</span>
      </div>
      <hr />
      <div class="detail-item">
        <strong>Types: </strong>
        <span>
          {{
            details.types
              ? details.types.map((type) => type.type.name).join(", ")
              : ""
          }}
        </span>
      </div>
      <hr />
      <b-row>
        <b-col>
          <b-button class="b-button" @click="copyData"
            >Share to my friends</b-button
          >
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
    </div>
  </b-modal>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ModalPokemon",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState("pokemon", {
      details: (state) => state.pokemon,
    }),

    pokemonName() {
      return this.pokemon.name
        ? this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
        : "";
    },
  },

  methods: {
    clearDetails() {
      this.$store.commit("pokemon/clearPokemon");
      this.$refs["modal-pokemon"].hide();
    },
    copyData() {
      const data = `${this.pokemonName}, ${this.details.weight}, ${
        this.details.height
      }, ${
        this.details.types
          ? this.details.types.map((type) => type.type.name).join(", ")
          : ""
      }`;
      navigator.clipboard.writeText(data);
    },
  },
};
</script>
<style scoped>
.custom-modal .modal-content {
  padding: 0 !important;
}

.background-container {
  width: 100%;
  height: 40%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.fondo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.img-pokemon {
  width: 30%;
  height: 150px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
  color: #ffffff;
}
:hover .close {
  color: #ffffff;
}

.pokemon-details {
  padding: 20px;
  margin-top: 200px;
  position: relative;
  z-index: 1;
}

.detail-item {
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
  padding: 0 10px;
}

.detail-item strong {
  font-weight: bold;
  color: var(--text-grey);
  padding: 0 5px;
}

.detail-item span {
  font-weight: normal;
  color: var(--text-grey);
}
.b-button {
  margin: 0 5px;
  border-radius: 20px;
  padding: 8px 16px;
  transition: background-color 0.3s;
  padding: 0.5rem 1rem;
  border: none;
  width: auto;
  background-color: var(--color-botones-normal);
}
:hover .b-button {
  background-color: var(--boton-presionado);
}
@media (max-width: 991px) {
  .img-pokemon {
    top: 60px;
  }
  .b-button {
    width: auto;
  }
}
@media (max-width: 481px) {
  .img-pokemon {
    top: 80px;
  }
  .b-button {
    width: 200px;
  }
}
</style>
