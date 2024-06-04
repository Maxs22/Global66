<template>
  <b-row class="text-center">
    <b-col>
      <img class="circle" alt="pikachu" src="../assets/circle-red.svg" />
      <img class="pikachu" alt="pikachu" src="../assets/pikachu.svg" />
      <b-col>
        <h3 class="title">Welcome to Pokédex</h3>
      </b-col>
      <b-col>
        <p>
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </b-col>
      <b-col>
        <b-button class="b-button" to="/pokemonlist">Get started</b-button>
      </b-col>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "InitialPage",
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.circle {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-54%, -50%);
}

.pikachu {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -56%);
  width: 300px;
}
.title {
  position: absolute;
  top: 110%;
}
.b-button {
  position: absolute;
  top: 10%;
  margin: 0 5px;
  border-radius: 20px;
  padding: 8px 16px;
  transition: background-color 0.3s;
  padding: 0.5rem 1rem;
  border: none;
  width: 200px;
  background-color: var(--color-botones-normal);
}
:hover .b-button {
  background-color: var(--boton-presionado);
}
</style>
