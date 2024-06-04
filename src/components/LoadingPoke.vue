<template>
  <div class="loading-container">
    <img src="../assets/Loader.svg" alt="Loading..." class="pokeball-loading" />
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.pokeball-loading {
  width: 100px; /* Ajusta el tamaño según tus necesidades */
  animation: spin 1s infinite linear; /* Aplica una animación de rotación infinita */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
