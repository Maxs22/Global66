<template>
  <router-link
    :to="route"
    class="rounded-button"
    :style="{ backgroundColor: color }"
  >
    <span v-if="icon" class="icon">
      <img :src="icon" alt="icon" />
    </span>
    <span class="text">{{ text }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.rounded-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s;
}

.rounded-button:hover {
  background-color: darken(10%);
}

.icon {
  margin-right: 10px;
}

.icon img {
  width: 20px;
  height: 20px;
}

.text {
  font-size: 16px;
  font-weight: bold;
}
</style>
